'use client'

import { useState, useRef, RefObject } from 'react';
import React from 'react';
import Image from 'next/image';

interface NavigationItem {
  id: number;
  label: string;
}

const QaliceInfo = () => {
  const [navigationItems] = useState<NavigationItem[]>([
    { id: 0, label: 'Introduction' },
    { id: 1, label: 'Quantum State Preparation and Transmission' },
    { id: 2, label: 'Maintaining Superposition with Laser Pulse Interaction (LPI)' },
    { id: 3, label: 'Deformable Mirror Circuits for Stabilizing Qubits' },
    { id: 4, label: 'Quantum Mirror Memory for Storage and Access' },
    { id: 5, label: 'Quantum Key Distribution (QKD) for Secure Retrieval' },
    { id: 6, label: 'Security Analysis' },
    { id: 7, label: 'Scalability and Performance' },
    { id: 8, label: 'Future Work and Research Directions' },
    { id: 9, label: 'Ethical and Societal Implications' }
  ]);

  const sectionRefs = useRef<{ [key: number]: RefObject<HTMLDivElement> }>(
    navigationItems.reduce((acc, item) => {
      acc[item.id] = React.createRef<HTMLDivElement>();
      return acc;
    }, {} as { [key: number]: RefObject<HTMLDivElement> })
  );

  const scrollToSection = (id: number) => {
    const ref = sectionRefs.current[id];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="container mx-auto mt-20 flex justify-center items-center">
        {/* Left container */}
        <div className="w-2/3 p-4">
          <h1 className="text-4xl text-center mb-8 font-bold">Qalice Model: Comprehensive Integration of QED, LPI, and QKD</h1>

          {/* Navigation */}
          <div className="mb-8">
            <h2 className="text-2xl text-center mb-4 font-bold">Navigation:</h2>
            <ol className="list-decimal text-center ml-6">
              {navigationItems.map(item => (
                <li key={item.id}>
                  <span
                    onClick={() => scrollToSection(item.id)}
                    className="cursor-pointer text-pink-500 hover:underline"
                  >
                    {item.label}
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div className="justify-center items-center rounded mb-16">
            {/* GIF image */}
            <Image
              src="/mathematical.gif"
              alt="quantum"
              width={400}
              height={300}
              layout="responsive"
            />
          </div>

          {/* Content for each section */}
          {navigationItems.map(item => (
            <div
              key={item.id}
              id={`section-${item.id}`}
              ref={sectionRefs.current[item.id]}
              className="mb-8 rounded-lg border border-gray-300 p-6"
            >
              <h2 className="text-2xl text-center mb-4 font-bold">{item.label}</h2>
              {item.id === 0 && (
                <>
                  <p className="mb-4">
                    Qalice represents the pinnacle of quantum communication technology, integrating Quantum Electrodynamics (QED), Laser Pulse Interaction (LPI), and Quantum Key Distribution (QKD) to achieve and maintain qubit superposition using deformable mirrors in a Quantum Mirror Memory setup.
                  </p>
                </>
              )}
              {item.id === 1 && (
                <>
                  <p className="mb-4">
                    <strong>Entanglement Generation:</strong> Entangled photon pairs are generated using spontaneous parametric down-conversion (SPDC). The entangled state is represented as:
                  </p>
                  <Image src="/id1/entanglement.svg" alt="Entanglement Generation" width={500} height={300} style={{ marginBottom: '20px', marginTop: '20px' }}/>
                  <p className="mb-4">
                    <strong>Qubit Encoding:</strong> Qubit data is encoded onto one of the entangled photons using quantum gate operations:
                  </p>
                  <Image src="/id1/qubit_encoding.svg" alt="Qubit Encoding" width={500} height={300} style={{ marginBottom: '20px', marginTop: '20px' }}/>
                  <p className="mb-4">
                    <strong>Transmission:</strong> Encoded photons are transmitted through a quantum channel using synchronized laser pulses to maintain superposition.
                  </p>
                </>
              )}
              {item.id === 2 && (
                <>
                  <p className="mb-4">
                    <strong>Interaction Hamiltonian:</strong> The interaction between the laser pulse and the qubit is described by:
                  </p>
                  <Image src="/id2/interaction_hamiltonian.svg" alt="Interaction Hamiltonian" width={500} height={300} style={{ marginBottom: '20px', marginTop: '20px' }}/>
                  <p className="mb-4">
                    <strong>Modified Dirac Equation:</strong> The behavior of the qubit in the presence of the laser field is described by:
                  </p>
                  <Image src="/id2/dirac_equation.svg" alt="Modified Dirac Equation" width={500} height={300} style={{ marginBottom: '20px', marginTop: '20px' }}/>
                  <p className="mb-4">
                    <strong>Laser Pulse Synchronization:</strong> Laser pulses are phase-matched and timed correctly to maintain qubit coherence:
                  </p>
                  <Image src="/id2/phase_matching.svg" alt="Laser Pulse Synchronization" width={500} height={300} style={{ marginBottom: '20px', marginTop: '20px' }}/>
                </>
              )}
              {item.id === 3 && (
                <>
                  <p className="mb-4">
                    <strong>Quantum Mirror Loop (QML):</strong> Deformable mirrors in the Quantum Mirror Loop (QML) dynamically adjust and reflect the qubits, minimizing decoherence.
                  </p>
                  <Image src="/id3/quantum_mirror_loop.svg" alt="Quantum Mirror Loop" width={500} height={300} style={{ marginBottom: '20px', marginTop: '20px' }}/>
                  <p className="mb-4">
                    <strong>Feedback Mechanisms:</strong> Real-time feedback mechanisms control the position and curvature of the mirrors for optimal reflection, ensuring the stability of the qubits:
                  </p>
                  <Image src="/id3/feedback_mechanism.svg" alt="Feedback Mechanisms" width={500} height={300} style={{ marginBottom: '20px', marginTop: '20px' }}/>
                  <p className="mb-4">
                    <strong>Mirror Equation with Deformation:</strong> The surface profile of the deformable mirrors is described by:
                  </p>
                  <Image src="/id3/mirror_equation.svg" alt="Mirror Equation with Deformation" width={500} height={300} style={{ marginBottom: '20px', marginTop: '20px' }}/>
                </>
              )}
              {item.id === 4 && (
                <>
                  <p className="mb-4">
                    <strong>Initialization:</strong> The Quantum Mirror Memory is initialized to capture incoming qubits. It is isolated from environmental noise using cryogenic cooling and electromagnetic shielding to maintain qubit coherence.
                  </p>
                  <p className="mb-4">
                    <strong>Cryogenic Cooling Techniques:</strong> The cooling system consists of a cryostat with a series of thermal shields to minimize heat transfer. Temperature sensors and feedback loops are used to monitor and adjust the cooling process, ensuring the system remains stable and operational.
                  </p>
                  <Image src="/id4/cooling.svg" alt="Cryogenic Cooling Techniques" width={500} height={300} style={{ marginBottom: '20px', marginTop: '20px' }}/>
                  <p className="mb-4">
                    <strong>Electromagnetic Shielding:</strong> A multi-layered shielding approach is employed to protect the Quantum Mirror Memory from electromagnetic interference (EMI). The design includes conductive gaskets and waveguides to prevent EMI from entering through openings.
                  </p>
                  <Image src="/id4/shielding.svg" alt="Electromagnetic Shielding" width={500} height={300} style={{ marginBottom: '20px', marginTop: '20px' }}/>
                  <p className="mb-4">
                    <strong>Quantum State Maintenance:</strong> The superposition state of stored qubits is maintained using continuous laser pulse interactions:
                  </p>
                  <Image src="/id4/state_maintenance.svg" alt="Quantum State Maintenance" width={500} height={300} style={{ marginBottom: '20px', marginTop: '20px' }}/>
                  <p className="mb-4">
                    <strong>Continuous Laser Pulse Interaction:</strong> Continuous laser pulses are used to interact with the qubits, ensuring they remain in a coherent superposition state. The interaction is governed by the Hamiltonian:
                  </p>
                  <Image src="/id4/laser_pulse_interaction.svg" alt="Continuous Laser Pulse Interaction" width={500} height={300} style={{ marginBottom: '20px', marginTop: '20px' }}/>
                  <p className="mb-4">
                    <strong>Stability and Coherence:</strong> Strategies include active feedback loops, error correction, and environmental control to maintain the stability and coherence of the quantum states.
                  </p>
                  <Image src="/id4/stability_coherence.svg" alt="Stability and Coherence" width={500} height={300} style={{ marginBottom: '20px', marginTop: '20px' }}/>
                  <p className="mb-4">
                    <strong>Quantum Error Correction (QEC):</strong> QEC codes such as Shor’s code and surface codes are employed to protect the quantum information stored in the Quantum Mirror Memory.
                  </p>
                  <Image src="/id4/qec.svg" alt="Quantum Error Correction" width={500} height={300} style={{ marginBottom: '20px', marginTop: '20px' }}/>
                </>
              )}
              {item.id === 5 && (
                <>
                  <p className="mb-4">
                    <strong>QKD Protocol Implementation:</strong> A QKD protocol, such as BB84, is used for secure transmission of quantum information. This protocol ensures the generation and sharing of a secret key between the sender and receiver.
                  </p>
                  <Image src="/id5/qkd_protocol.svg" alt="QKD Protocol Implementation" width={500} height={300} style={{ marginBottom: '20px', marginTop: '20px' }}/>
                  <p className="mb-4">
                    <strong>Key Steps in the BB84 Protocol:</strong>
                    <ol className="list-decimal ml-6">
                      <li>The sender (Alice) prepares a series of qubits in one of four possible states: \(|0\rangle\), \(|1\rangle\), \(|+\rangle\), and \(|-\rangle\).</li>
                      <li>Bob randomly chooses one of two bases (rectilinear or diagonal) to measure each incoming qubit.</li>
                      <li>Alice and Bob publicly compare their chosen bases for each qubit and keep only the results where they both used the same basis.</li>
                      <li>They then perform error correction and privacy amplification to ensure the security and integrity of the key.</li>
                    </ol>
                  </p>
                  <p className="mb-4">
                    <strong>Error Correction and Privacy Amplification:</strong> The error correction process can be described by:
                  </p>
                  <Image src="/id5/error_correction.svg" alt="Error Correction and Privacy Amplification" width={500} height={300} style={{ marginBottom: '20px', marginTop: '20px' }}/>
                  <p className="mb-4">
                    <strong>Retrieving Information from a Matching QKD Pair:</strong> To retrieve information, the measurement process and key generation need to be understood. The probability of obtaining a specific outcome is given by the Born rule:
                  </p>
                  <Image src="/id5/qkd_retrieval.svg" alt="Retrieving Information from a Matching QKD Pair" width={500} height={300} style={{ marginBottom: '20px', marginTop: '20px' }}/>
                </>
              )}
              {item.id === 6 && (
                <>
                  <p className="mb-4">
                    <strong>Threat Models:</strong> Potential threats to the Qalice system include eavesdropping, man-in-the-middle attacks, and physical tampering.
                  </p>
                  <Image src="/id6/threat_models.svg" alt="Threat Models" width={500} height={300} style={{ marginBottom: '20px', marginTop: '20px' }}/>
                  <p className="mb-4">
                    <strong>Mitigation Strategies:</strong> Strategies include physical security measures, cryptographic protocols, and redundancy.
                  </p>
                  <Image src="/id6/mitigation_strategies.svg" alt="Mitigation Strategies" width={500} height={300} style={{ marginBottom: '20px', marginTop: '20px' }}/>
                  <p className="mb-4">
                    <strong>Performance Metrics:</strong> Metrics include key generation rate, error rate, and resistance to specific attack vectors.
                  </p>
                  <Image src="/id6/performance_metrics.svg" alt="Performance Metrics" width={500} height={300} style={{ marginBottom: '20px', marginTop: '20px' }}/>
                </>
              )}
              {item.id === 7 && (
                <>
                  <p className="mb-4">
                    <strong>Scalability:</strong> The Qalice model can be scaled by increasing the number of qubits and improving the efficiency of QEC codes.
                  </p>
                  <Image src="/id7/scalability.svg" alt="Scalability" width={500} height={300} style={{ marginBottom: '20px', marginTop: '20px' }}/>
                  <p className="mb-4">
                    <strong>Performance Benchmarks:</strong> Benchmarks include data transmission rates, qubit coherence times, and error rates.
                  </p>
                  <Image src="/id7/performance_benchmarks.svg" alt="Performance Benchmarks" width={500} height={300} style={{ marginBottom: '20px', marginTop: '20px' }}/>
                  <p className="mb-4">
                    <strong>Optimization Techniques:</strong> Techniques include error correction algorithms, efficient gate operations, and hardware improvements.
                  </p>
                  <Image src="/id7/optimization_techniques.svg" alt="Optimization Techniques" width={500} height={300} style={{ marginBottom: '20px', marginTop: '20px' }}/>
                </>
              )}
              {item.id === 8 && (
                <>
                  <p className="mb-4">
                    <strong>Potential Improvements:</strong> Improvements include enhanced qubit stability, efficient QKD protocols, and advanced error correction.
                  </p>
                  <Image src="/id8/potential_improvements.svg" alt="Potential Improvements" width={500} height={300} style={{ marginBottom: '20px', marginTop: '20px' }}/>
                  <p className="mb-4">
                    <strong>Experimental Validation:</strong> Plans involve collaborations, funding, and prototyping to validate the Qalice model.
                  </p>
                  <Image src="/id8/experimental_validation.svg" alt="Experimental Validation" width={500} height={300} style={{ marginBottom: '20px', marginTop: '20px' }}/>
                  <p className="mb-4">
                    <strong>Emerging Technologies:</strong> Technologies such as quantum repeaters and advanced materials can be integrated into the Qalice model.
                  </p>
                  <Image src="/id8/emerging_technologies.svg" alt="Emerging Technologies" width={500} height={300} style={{ marginBottom: '20px', marginTop: '20px' }}/>
                </>
              )}
              {item.id === 9 && (
                <>
                  <p className="mb-4">
                    <strong>Ethical Considerations:</strong> Considerations include privacy concerns, dual-use technology, and regulatory compliance.
                  </p>
                  <Image src="/id9/ethical_considerations.svg" alt="Ethical Considerations" width={500} height={300} style={{ marginBottom: '20px', marginTop: '20px' }}/>
                  <p className="mb-4">
                    <strong>Societal Impact:</strong> Impact includes revolutionizing industries, creating new jobs, and contributing to scientific knowledge.
                  </p>
                  <Image src="/id9/societal_impact.svg" alt="Societal Impact" width={500} height={300} style={{ marginBottom: '20px', marginTop: '20px' }}/>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QaliceInfo;
