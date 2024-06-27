OPENQASM 2.0;
include "qelib1.inc";
qreg q[3];
creg c[3];
// Encoding the logical qubit
h q[0];
cx q[0], q[1];
cx q[0], q[2];
// Inducing an error on q[1]
x q[1];
// Decoding process
cx q[0], q[1];
cx q[0], q[2];
ccx q[1], q[2], q[0];
measure q[0] -> c[0];
measure q[1] -> c[1];
measure q[2] -> c[2];
