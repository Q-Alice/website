import React from 'react';

interface CostOverviewProps {
  totalCost: number;
  totalRaised: number;
}

const CostOverview: React.FC<CostOverviewProps> = ({ totalCost, totalRaised }) => {
  // Calculate the percentage of the total cost raised
  const raisedPercentage = (totalRaised / totalCost) * 100 || 0;

  // Calculate the opportunity left
  const opportunityLeft = totalCost - totalRaised || 0;

  // Calculate the potential return for a $10K investment
  const investmentReturn = totalRaised + 10000 || 0;

  return (
    <div className="flex justify-center items-center">
    <div className="container mx-auto mt-20 flex justify-center items-center">
    <div className="container mx-auto text-white">
      <h1 className="text-4xl font-bold mb-6">Cost and Overview of Prototype</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Cost Breakdown</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-700 rounded-lg">
            <p><strong>Transmitters:</strong> $5,000</p>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg">
            <p><strong>Mirror Systems:</strong> $15,000</p>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg">
            <p><strong>Receivers:</strong> $5,000</p>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg">
            <p><strong>Qalice Software and Program:</strong> $30,000</p>
          </div>
        </div>
        <p className="mt-4"><strong>Total Cost:</strong> ${totalCost}</p>
        <p className="text-sm text-gray-400">Please note that these estimates are rough and may vary based on specific requirements, negotiations, and additional expenses such as labor, facilities, and contingencies.</p>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Prototype Overview</h2>
        <ol className="list-decimal pl-8">
          <li>Transmitter: This is the starting point where the quantum information is generated or encoded into qubits.</li>
          <li>Qubit: Qubits are the basic units of quantum information.</li>
          <li>Laser Pulse: The qubits are encoded into laser pulses.</li>
          <li>Qalice: Both the sender and receiver are communicating to Qalice, the core software and program running the Quantum Circuit Mirror.</li>
        </ol>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Fundraising Progress</h2>
        <div className="bg-gray-800 w-full h-8 rounded-md overflow-hidden">
          <div className="bg-blue-500 h-full" style={{ width: `${raisedPercentage > 100 ? 100 : raisedPercentage}%` }}></div>
        </div>
        <div className="flex justify-between mt-2">
          <p>Total Raised: ${totalRaised}</p>
          <p>Opportunity Left: ${opportunityLeft}</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Potential Return on Investment</h2>
        <p>With a $10,000 investment, the total raised amount would increase to ${investmentReturn}. This additional funding could accelerate the development process and contribute to achieving project milestones more quickly.</p>
      </div>
    </div>
    </div>
    </div>
  );
};

export default CostOverview;
