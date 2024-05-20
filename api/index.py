from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/api/compile-and-run", methods=["POST"])
def compile_and_run():
    # Retrieve the quantum code from the request body
    data = request.json
    quantum_code = data.get("code")

    # Compile and run the quantum code (replace this with your actual compilation and execution logic)
    # For demonstration purposes, let's just return the input quantum code as output
    output = f"Quantum code received:\n{quantum_code}"

    # Return the output as JSON response
    return jsonify({"output": output})

if __name__ == "__main__":
    app.run(debug=True, port=5328)
