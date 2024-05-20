'use client'

import { useState, useRef, RefObject } from 'react';
import React from 'react';
import Image from 'next/image';

interface NavigationItem {
  id: number;
  label: string;
}

const Info = () => {
  const [navigationItems] = useState<NavigationItem[]>([
    { id: 0, label: 'Introduction to Qalice' },
    { id: 1, label: 'Quantum Electrodynamic (QED)' },
    { id: 2, label: 'Interferometric Measurement' },
    { id: 3, label: 'Quantum State Tomography' },
    { id: 4, label: 'Feedback Control Systems' },
    { id: 5, label: 'Quantum Error Correction Codes' },
    { id: 6, label: 'Entanglement Swapping' },
    { id: 7, label: 'Characterization of Deformable Mirrors' },
    { id: 8, label: 'Error Syndromes Analysis' },
    { id: 9, label: 'Quantum Laser Communication' },
    { id: 10, label: 'Establishing a Quantum Server' },
  ]);

  // Define the type for sectionRefs
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
          <h1 className="text-4xl text-center mb-8 font-bold">WHAT IS QALICE?</h1>

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
                    <strong>What is Qalice?</strong><br />
                    Qalice represents the pinnacle of quantum communication technology, integrating the groundbreaking Quantum Mirror Circuit Loop and Qubit Laser Encoding for Secure Superposition Dynamic Communications. It embodies a revolutionary approach to establishing secure and efficient communication channels at the quantum level.
                  </p>
                  <p className="mb-4">
                    <strong>The Quantum Mirror Circuit Loop:</strong><br />
                    At the core of Qalice lies the Quantum Mirror Circuit Loop, a sophisticated framework that employs advanced deformable mirrors to achieve seamless superposition and entanglement of quantum states. This innovative loop enables dynamic processing and transmission of quantum information, setting new standards for quantum communication protocols.
                  </p>
                  <p className="mb-4">
                    <strong>Qubit Laser Encoding for Secure Communications:</strong><br />
                    Qalice leverages Qubit Laser Encoding to ensure the security and integrity of communication channels. By encoding information onto laser beams at the qubit level, Qalice establishes highly secure communication links resistant to interception and decryption attempts, thus safeguarding sensitive data from unauthorized access.
                  </p>
                  <p className="mb-4">
                    <strong>Advanced Communication and Data Processing:</strong><br />
                    Qalice revolutionizes communication and data processing by enabling real-time, high-speed transmission of quantum information. Through its integrated quantum error correction codes and entanglement swapping techniques, Qalice ensures reliable delivery of data with minimal latency and maximum security. Whether transmitting sensitive information across vast distances or processing complex datasets for quantum computing tasks, Qalice offers unparalleled capabilities for the future of quantum communication and data processing.
                  </p>
                </>
              )}
              {item.id === 1 && (
                <>
                  <p className="mb-4">
                    <strong>Overview:</strong> Quantum Electrodynamic (QED) is the quantum field theory that describes how light and matter interact at the fundamental level. It encompasses the principles of quantum mechanics and electromagnetism, providing a framework to understand phenomena such as photon emission and absorption, as well as the behavior of charged particles in electromagnetic fields.
                  </p>
                  <strong>Key Concepts:</strong>
                  <ol className="list-decimal ml-6">
                    <li><strong>Photon-Matter Interactions:</strong> QED explains how photons (particles of light) interact with matter, leading to processes like absorption, emission, and scattering. These interactions play a crucial role in quantum communication and computation, where qubits are encoded into photons.</li>
                    <li><strong>Superposition and Entanglement:</strong> QED allows for the creation of superposition states, where particles can exist in multiple states simultaneously. This property is exploited in quantum algorithms and protocols for parallel computation and secure communication. Additionally, QED facilitates the generation of entangled states, which are crucial for quantum teleportation and quantum key distribution.</li>
                    <li><strong>Quantum Fluctuations and Virtual Particles:</strong> QED predicts the existence of virtual particles that pop in and out of existence due to quantum fluctuations in the vacuum. While these particles are not directly observable, their effects can be observed indirectly, contributing to phenomena like vacuum polarization and the Lamb shift.</li>
                  </ol>
                  <strong>Implications Moving Forward:</strong>
                  <ol className="list-decimal ml-6">
                    <li><strong>Advancements in Quantum Technologies:</strong> Understanding and harnessing QED principles will drive advancements in quantum technologies, including quantum computing, quantum communication, and quantum sensing. By leveraging photon-matter interactions and quantum phenomena, researchers can develop more powerful and efficient quantum devices.</li>
                    <li><strong>Enhanced Quantum Security:</strong> QED-inspired techniques can be utilized to enhance the security of quantum communication protocols, such as quantum key distribution (QKD). By leveraging the principles of superposition and entanglement, quantum cryptography schemes can achieve unprecedented levels of security, resistant to eavesdropping and hacking attempts.</li>
                    <li><strong>Exploration of Fundamental Physics:</strong> QED provides insights into the fundamental nature of light and matter interactions. Continued research in this field will deepen our understanding of quantum mechanics and potentially lead to new discoveries in particle physics and quantum field theory.</li>
                  </ol>
                </>
              )}
              {item.id === 2 && (
                <>
                  <p className="mb-4">
                    <strong>Interference Pattern Equation:</strong><br />
                    The interference pattern equation is used to describe the intensity of the interference pattern in an interferometric measurement setup. It helps in understanding the distribution of light intensity resulting from interference.
                  </p>
                  <strong>Phase Coherence Criterion:</strong><br />
                  The phase coherence criterion involves analyzing the visibility of interference fringes to assess the phase coherence of the interferometric measurement system. It helps ensure the accuracy and reliability of the measurement results.
                  <Image src="/id2/main.svg" alt="Interferometric" width={500} height={300} style={{ marginBottom: '20px', marginTop: '20px', fill: 'white' }}/>
                  {/* Sub Images with Descriptions */}
                  <div className="sub-images">
                    <div className="sub-image">
                      <Image src="/id2/1.svg" alt="Description 1" width={50} height={50} style={{ marginBottom: '10px', marginTop: '10px'}}/>
                      <p>is the intensity of the interference pattern</p>
                    </div>
                    <div className="sub-image">
                      <Image src="/id2/2.svg" alt="Description 2" width={25} height={25} style={{ marginBottom: '10px', marginTop: '10px'}} />
                      <p>is the maximum intensity</p>
                    </div>
                    <div className="sub-image">
                      <Image src="/id2/3.svg" alt="Description 3" width={20} height={20} style={{ marginBottom: '10px', marginTop: '10px'}} />
                      <p>is the wavelength of the laser</p>
                    </div>
                    <div className="sub-image">
                      <Image src="/id2/4.svg" alt="Description 4" width={20} height={25} style={{ marginBottom: '10px', marginTop: '10px'}} />
                      <p>is the distance between adjacent fringes</p>
                    </div>
                  </div>
                </>
              )}
              {item.id === 3 && (
                   <>
                   <p className="mb-4">
                     <strong>Density Matrix Reconstruction:</strong><br />
                     Density matrix reconstruction is a technique used to reconstruct the density matrix of a quantum system from experimental measurements. It allows for the characterization and analysis of quantum states.
                     <Image src="/id3/main.svg" alt="Density" width={500} height={300} style={{ marginBottom: '20px', marginTop: '20px', fill: 'white' }}/>
                   </p>
                   <strong>Fidelity Calculation:</strong><br />
                   Fidelity calculation is used to quantify the similarity between a target quantum state and a measured quantum state. It provides a measure of how accurately the measured state represents the target state.
                    <Image src="/id3/main2.svg" alt="Fidelity" width={500} height={300} style={{ marginBottom: '20px', marginTop: '20px', fill: 'white' }}/>
                    {/* Sub Images with Descriptions */}
                    <div className="sub-images">
                     <div className="sub-image">
                       <Image src="/id3/1.svg" alt="Description 1" width={20} height={25} style={{ marginBottom: '10px', marginTop: '10px'}}/>
                       <p>is the density matrix</p>
                     </div>
                     <div className="sub-image">
                       <Image src="/id3/2.svg" alt="Description 2" width={30} height={25} style={{ marginBottom: '10px', marginTop: '10px'}}/>
                       <p>is the quantum state</p>
                     </div>
                     <div className="sub-image">
                       <Image src="/id3/3.svg" alt="Description 3" width={25} height={25} style={{ marginBottom: '10px', marginTop: '10px'}}/>
                       <p>is the number of measurments</p>
                     </div>
                   </div>
                 </>
              )}
              {item.id === 4 && (
                 <>
                  <p className="mb-4">
                    <strong>Proportional-Integral-Derivative (PID) Control:</strong><br />
                    PID control is a control mechanism commonly used in feedback control systems to regulate system behavior. It adjusts the control signal based on the error between the desired and actual system outputs.
                  </p>
                  <Image src="/id4/main.svg" alt="Feedback Control" width={500} height={300} style={{ marginBottom: '20px', marginTop: '20px', fill: 'white' }} />
                  {/* Sub Images with Descriptions */}
                  <div className="sub-images">
                    <div className="sub-image">
                      <Image src="/id4/1.svg" alt="Description 1" width={30} height={25} style={{ marginBottom: '10px', marginTop: '10px'}}/>
                      <p>is the control signal</p>
                    </div>
                    <div className="sub-image">
                      <Image src="/id4/2.1.svg" alt="Description 2" width={25} height={25} style={{ marginBottom: '10px', marginTop: '10px'}}/>
                      <p>is the proportional gains</p>
                    </div>
                    <div className="sub-image">
                      <Image src="/id4/2.2.svg" alt="Description 3" width={25} height={25} style={{ marginBottom: '10px', marginTop: '10px'}}/>
                      <p>is the integral gains</p>
                    </div>
                    <div className="sub-image">
                      <Image src="/id4/2.3.svg" alt="Description 4" width={25} height={25} style={{ marginBottom: '10px', marginTop: '10px'}}/>
                      <p>is the derivative gains</p>
                    </div>
                    <div className="sub-image">
                      <Image src="/id4/3.svg" alt="Description 5" width={30} height={25} style={{ marginBottom: '10px', marginTop: '10px'}}/>
                      <p>is the error signal</p>
                    </div>
                  </div>
                </>
              )}
              {item.id === 5 && (
                <>
                <p className="mb-4">
                  <strong>Three-Qubit Bit Flip Code:</strong><br />
                  The three-qubit bit flip code is a quantum error correction code used to protect quantum information against bit-flip errors. It encodes a single logical qubit into three physical qubits to detect and correct errors.
                </p>
                <Image src="/id5/main.svg" alt="Error Codes" width={200} height={300} style={{ marginBottom: '20px', marginTop: '20px', fill: 'white' }} />
                <strong>Syndrome Measurement Equations:</strong><br />
                Syndrome measurement equations are used to determine the syndrome of errors in a quantum error correction code. They help identify the type and location of errors in the encoded quantum information.
                <Image src="/id5/main2.svg" alt="Error Codes" width={200} height={300} style={{ marginBottom: '20px', marginTop: '20px', fill: 'white' }} />
                <div className="sub-images">
                  <div className="sub-image">
                    <Image src="/id5/1.1.svg" alt="Description 1" width={25} height={25} style={{ marginBottom: '10px', marginTop: '10px'}}/>
                    <p>Pauli Operator</p>
                  </div>
                  <div className="sub-image">
                    <Image src="/id5/1.2.svg" alt="Description 2" width={25} height={25} style={{ marginBottom: '10px', marginTop: '10px'}}/>
                    <p>Pauli Operator</p>
                  </div>
                  <div className="sub-image">
                    <Image src="/id5/2.1.svg" alt="Description 3" width={25} height={25} style={{ marginBottom: '10px', marginTop: '10px'}}/>
                    <p>Syndrome measurement</p>
                  </div>
                  <div className="sub-image">
                    <Image src="/id5/2.2.svg" alt="Description 4" width={25} height={25} style={{ marginBottom: '10px', marginTop: '10px'}}/>
                    <p>Syndrome measurement</p>
                  </div>
                </div>
              </>
              )}
              {item.id === 6 && (
                <>
                  <p className="mb-4">
                    <strong>Overview:</strong> Entanglement swapping is a fundamental technique in quantum communication and networking that allows the creation of entanglement between distant particles. It enables the establishment of long-distance entanglement, which is crucial for quantum teleportation, quantum key distribution, and the construction of quantum networks.
                  </p>
                  <Image src="/id6/1.svg" alt="Bell State1" width={500} height={300} />
                  <Image src="/id6/2.svg" alt="Bell State2" width={500} height={300} />
                  <Image src="/id6/3.svg" alt="Bell State3" width={500} height={300} />
                  <Image src="/id6/4.svg" alt="Bell State4" width={500} height={300} />
                  <strong>Key Concepts:</strong>
                  <ol className="list-decimal ml-6">
                    <li><strong>Entanglement Generation:</strong> Entanglement swapping begins with the generation of two pairs of entangled particles. These pairs can be photons, atoms, or other quantum systems. Each pair is entangled, meaning the quantum states of the particles are correlated, even when separated by large distances.</li>
                    <li><strong>Bell State Measurement:</strong> To perform entanglement swapping, a Bell state measurement is conducted on one particle from each entangled pair. This measurement projects the particles onto a specific entangled state, effectively swapping the entanglement between the two pairs. The result is that the remaining particles, which were not measured, become entangled, even though they have never interacted directly.</li>
                    <li><strong>Applications:</strong> Entanglement swapping is a key technique for quantum repeaters, which extend the range of quantum communication by creating entanglement over long distances. It also plays a crucial role in quantum teleportation, where the quantum state of a particle is transferred from one location to another using entanglement. Additionally, entanglement swapping is essential for building scalable quantum networks and enabling secure quantum key distribution.</li>
                  </ol>
                  <strong>Implications Moving Forward:</strong>
                  <ol className="list-decimal ml-6">
                    <li><strong>Quantum Communication Networks:</strong> Entanglement swapping enables the construction of large-scale quantum communication networks, where entanglement can be established between distant nodes. These networks facilitate secure communication, distributed quantum computing, and the sharing of quantum resources, revolutionizing information exchange and processing.</li>
                    <li><strong>Scalable Quantum Repeater Networks:</strong> Entanglement swapping is a fundamental building block for scalable quantum repeater networks. By concatenating multiple entanglement swapping operations, researchers can extend the range of entanglement, enabling long-distance quantum communication with high fidelity. These networks are essential for overcoming the challenges of decoherence and signal loss in quantum communication.</li>
                    <li><strong>Advanced Quantum Protocols:</strong> Entanglement swapping opens up possibilities for advanced quantum protocols, such as entanglement-based quantum key distribution (QKD) and quantum teleportation. These protocols offer enhanced security and efficiency compared to classical counterparts, paving the way for practical and robust quantum communication systems.</li>
                  </ol>
                </>
              )}
              {item.id === 7 && (
                <>
                <p className="mb-4">
                  <strong>Mirror Surface Shape Equation:</strong><br />
                  The mirror surface shape equation describes the surface shape of a deformable mirror using Zernike polynomials. It provides a mathematical representation of the mirror's deformation, allowing for characterization and analysis.
                </p>
                <Image src="/id7/main.svg" alt="Surface Shape" width={500} height={300} style={{ marginBottom: '20px', marginTop: '20px', fill: 'white' }}/>
                <div className="sub-images">
                  <div className="sub-image">
                    <Image src="/id7/1.svg" alt="Description 1" width={75} height={25} style={{ marginBottom: '10px', marginTop: '10px'}}/>
                    <p>is the surface shape of the mirror</p>
                  </div>
                  <div className="sub-image">
                    <Image src="/id7/2.svg" alt="Description 2" width={25} height={25} style={{ marginBottom: '10px', marginTop: '10px'}}/>
                    <p>is the reference surface</p>
                  </div>
                  <div className="sub-image">
                    <Image src="/id7/3.svg" alt="Description 3" width={25} height={25} style={{ marginBottom: '10px', marginTop: '10px'}}/>
                    <p>is the amplitude of the n-th Zernike polynomial</p>
                  </div>
                  <div className="sub-image">
                    <Image src="/id7/4.svg" alt="Description 4" width={75} height={50} style={{ marginBottom: '10px', marginTop: '10px'}}/>
                    <p>is the n-th Zernike radial polynomial</p>
                  </div>
                  <div className="sub-image">
                    <Image src="/id7/5.svg" alt="Description 5" width={25} height={25} style={{ marginBottom: '10px', marginTop: '10px'}}/>
                    <p>are the Zernike polynomials</p>
                  </div>
                </div>
              </>
              )}
              {item.id === 8 && (
                <>
                <p className="mb-4">
                  <strong>Error Syndrome Measurement:</strong><br />
                  Error syndrome measurement is a technique used in quantum error correction to identify and analyze errors in encoded quantum information. It involves measuring syndromes that indicate the presence of errors in the quantum state.
                </p>
                <Image src="/id8/main.svg" alt="Error Syndrome" width={500} height={300} style={{ marginBottom: '20px', marginTop: '20px', fill: 'white' }} />
                <div className="sub-images">
                  <div className="sub-image">
                    <Image src="/id8/1.svg" alt="Description 1" width={25} height={25} style={{ marginBottom: '10px', marginTop: '10px'}}/>
                    <p>denotes bitwise XOR operation</p>
                  </div>
                  <div className="sub-image">
                    <Image src="/id8/2.svg" alt="Description 2" width={100} height={25} style={{ marginBottom: '10px', marginTop: '10px'}}/>
                    <p>calculates the parity of the sydrom bits</p>
                  </div>
                </div>
              </>
              )}
              {item.id === 9 && (
                <>
                  <p className="mb-4">
                    <strong>Overview:</strong> Quantum Laser Communication represents a paradigm shift in secure and efficient data transmission. By harnessing the principles of quantum mechanics, this advanced technology enables unbreakable encryption, high-speed communication, and enhanced data integrity, revolutionizing how information is exchanged and protected in the digital age.
                  </p>
                  <strong>Key Concepts:</strong>
                  <ol className="list-decimal ml-6">
                    <li><strong>Quantum Key Distribution (QKD):</strong> QKD allows for the secure exchange of cryptographic keys between parties using the principles of quantum mechanics. It ensures the confidentiality and integrity of transmitted information, providing an unbreakable encryption mechanism that is resistant to hacking and eavesdropping attempts.</li>
                    <li><strong>Entanglement-Based Communication:</strong> Entanglement-based communication leverages the phenomenon of quantum entanglement to establish secure and instantaneous connections between distant parties. This technique enables the transmission of quantum information with high fidelity and minimal loss, ensuring reliable and efficient communication.</li>
                    <li><strong>Quantum Repeaters:</strong> Quantum repeaters extend the range of quantum communication by amplifying and retransmitting quantum signals. These devices overcome the limitations of signal loss and decoherence, enabling long-distance quantum communication with high reliability and low error rates. Quantum repeaters play a crucial role in building scalable and secure quantum networks.</li>
                  </ol>
                  <strong>Implications Moving Forward:</strong>
                  <ol className="list-decimal ml-6">
                    <li><strong>Unbreakable Encryption:</strong> Quantum Laser Communication provides unbreakable encryption, ensuring the confidentiality and integrity of sensitive information. By leveraging the principles of quantum mechanics, this technology offers a level of security that is fundamentally resistant to hacking and eavesdropping attempts. It has the potential to revolutionize data protection in various sectors, including finance, healthcare, and government.</li>
                    <li><strong>High-Speed Communication:</strong> Quantum Laser Communication enables high-speed data transmission, surpassing the limitations of classical communication systems. By harnessing the properties of quantum entanglement and superposition, this technology allows for ultra-fast communication with minimal latency. It opens up new possibilities for real-time applications, such as video streaming, online gaming, and remote collaboration.</li>
                    <li><strong>Enhanced Data Integrity:</strong> Quantum Laser Communication ensures the integrity of transmitted data by leveraging the principles of quantum error correction. By detecting and correcting errors introduced during transmission, this technology guarantees the accuracy and reliability of communicated information. It is particularly valuable in critical applications, such as scientific research, aerospace, and military operations, where data integrity is paramount.</li>
                  </ol>
                </>
              )}
              {item.id === 10 && (
                <>
                  <p className="mb-4">
                    <strong>Overview:</strong> Establishing a quantum server involves creating a robust and secure infrastructure to support quantum computing and communication applications. A quantum server serves as a central hub for performing quantum computations, managing quantum resources, and facilitating secure quantum communication, enabling the practical implementation of quantum technologies.
                  </p>
                  <strong>Key Concepts:</strong>
                  <ol className="list-decimal ml-6">
                    <li><strong>Quantum Hardware:</strong> A quantum server requires specialized quantum hardware, such as qubits, quantum processors, and quantum memory. These components form the foundation of the quantum server, enabling the execution of quantum algorithms, storage of quantum information, and manipulation of quantum states. The hardware must be carefully calibrated and maintained to ensure optimal performance and reliability.</li>
                    <li><strong>Quantum Software:</strong> Quantum software plays a crucial role in managing the quantum server and enabling quantum computations. It includes quantum programming languages, compilers, and algorithms that facilitate the development and execution of quantum applications. The software must be designed to interface seamlessly with the quantum hardware, providing a user-friendly environment for researchers and developers.</li>
                    <li><strong>Security and Encryption:</strong> Security is paramount in a quantum server, as it handles sensitive quantum information and communication. Quantum encryption techniques, such as quantum key distribution (QKD) and post-quantum cryptography, are employed to ensure the confidentiality and integrity of data. Robust security protocols and access controls are implemented to protect the quantum server from unauthorized access and cyber threats.</li>
                  </ol>
                  <strong>Implications Moving Forward:</strong>
                  <ol className="list-decimal ml-6">
                    <li><strong>Quantum Computing Applications:</strong> Establishing a quantum server paves the way for practical quantum computing applications in various fields, including cryptography, optimization, drug discovery, and material science. By providing a centralized infrastructure for quantum computations, the quantum server enables researchers and developers to harness the power of quantum algorithms, leading to groundbreaking advancements and solving complex problems that are intractable with classical computers.</li>
                    <li><strong>Quantum Communication Networks:</strong> A quantum server serves as a central node in quantum communication networks, facilitating secure and efficient communication between distant parties. It enables the implementation of quantum key distribution (QKD), quantum teleportation, and entanglement-based communication protocols, ensuring the confidentiality and integrity of transmitted information. Quantum communication networks have the potential to revolutionize secure communication, enabling applications such as secure internet, banking, and government communications.</li>
                    <li><strong>Advancements in Quantum Research:</strong> Establishing a quantum server fosters advancements in quantum research by providing a platform for testing and validating new quantum algorithms, protocols, and technologies. Researchers can leverage the quantum server to explore novel quantum phenomena, develop new quantum error correction techniques, and investigate the fundamental principles of quantum mechanics. This collaborative environment accelerates the progress of quantum research, leading to new discoveries and innovations in the field.</li>
                  </ol>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default Info;

