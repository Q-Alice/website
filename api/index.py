from flask import Flask, request, jsonify
from qiskit import QuantumCircuit, transpile, IBMQ
from qiskit.visualization import plot_histogram, circuit_drawer
from qiskit.providers.ibmq import least_busy
import matplotlib.pyplot as plt
import base64
from io import BytesIO
import os

app = Flask(__name__)
QASM_DIR = os.path.join(os.path.dirname(__file__), 'qasm_files')

# Load IBM Quantum account
IBMQ.save_account('25e41bddcb5e8c626e424aa22c649f586f2540899d67f2a1bea408971c982d3187822dfc80c3ccea1c48687dc4730b98c124edfc7570fdb7997c5782de79eb48', overwrite=True)
IBMQ.load_account()

def list_qasm_files():
    try:
        files = [f for f in os.listdir(QASM_DIR) if f.endswith('.qasm')]
        return {"files": files}
    except Exception as e:
        return {"error": str(e)}, 500

def compile_and_run_quantum_code_from_file(filename):
    try:
        file_path = os.path.join(QASM_DIR, filename)
        with open(file_path, 'r') as file:
            quantum_code = file.read()
        qc = QuantumCircuit.from_qasm_str(quantum_code)
    except Exception as e:
        return {"error": str(e)}, 400

    provider = IBMQ.get_provider(hub='ibm-q')
    backend = least_busy(provider.backends(simulator=False))

    compiled_circuit = transpile(qc, backend)
    job = backend.run(compiled_circuit)
    result = job.result()

    counts = result.get_counts(qc)

    fig, ax = plt.subplots()
    plot_histogram(counts, ax=ax)
    histogram_img = BytesIO()
    plt.savefig(histogram_img, format='png')
    histogram_img.seek(0)
    histogram_base64 = base64.b64encode(histogram_img.getvalue()).decode('utf-8')
    plt.close()

    fig, ax = plt.subplots()
    circuit_drawer(qc, ax=ax, output='mpl')
    circuit_img = BytesIO()
    plt.savefig(circuit_img, format='png')
    circuit_img.seek(0)
    circuit_base64 = base64.b64encode(circuit_img.getvalue()).decode('utf-8')
    plt.close()

    return {
        "counts": counts,
        "histogram": f"data:image/png;base64,{histogram_base64}",
        "circuit_diagram": f"data:image/png;base64,{circuit_base64}"
    }

@app.route("/api/qasm-files", methods=["GET"])
def get_qasm_files():
    output = list_qasm_files()
    return jsonify(output)

@app.route("/api/compile-and-run", methods=["POST"])
def compile_and_run():
    data = request.json
    filename = data.get("filename")
    output = compile_and_run_quantum_code_from_file(filename)
    return jsonify(output)

if __name__ == '__main__':
    app.run(port=5328)
