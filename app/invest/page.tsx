import React from 'react';

interface CostOverviewProps {
  totalCost: number;
  totalRaised: number;
}

const CostOverview: React.FC<CostOverviewProps> = ({ totalCost, totalRaised }) => {
  const raisedPercentage = (totalRaised / totalCost) * 100 || 0;
  const opportunityLeft = totalCost - totalRaised || 0;
  const investmentReturn = totalRaised + 10000 || 0;

  return (
    <div className="container mx-auto mt-10 px-4">
      <div className="max-w-3xl mx-auto bg-black rounded-lg shadow-lg py-8 px-6">
        <h1 className="text-3xl font-semibold mb-6">Cost and Overview of Prototype</h1>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Cost Breakdown</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-100 rounded-lg text-black">
              <p><strong>Transmitters:</strong> $5,000</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg text-black">
              <p><strong>Mirror Systems:</strong> $15,000</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg text-black">
              <p><strong>Receivers:</strong> $5,000</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg text-black">
              <p><strong>Qalice Software and Program:</strong> $30,000</p>
            </div>
          </div>
          <p className="mt-4"><strong>Total Cost:</strong> ${totalCost}</p>
          <p className="text-sm text-gray-500">Please note that these estimates are rough and may vary based on specific requirements, negotiations, and additional expenses such as labor, facilities, and contingencies.</p>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Prototype Overview</h2>
          <ol className="list-decimal pl-8">
            <li>Transmitter: This is the starting point where the quantum information is generated or encoded into qubits.</li>
            <li>Qubit: Qubits are the basic units of quantum information.</li>
            <li>Laser Pulse: The qubits are encoded into laser pulses.</li>
            <li>Qalice: Both the sender and receiver are communicating to Qalice, the core software and program running the Quantum Circuit Mirror.</li>
          </ol>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Fundraising Progress</h2>
          <div className="bg-gray-200 h-8 rounded-md overflow-hidden">
            <div className="bg-blue-500 h-full" style={{ width: `${raisedPercentage > 100 ? 100 : raisedPercentage}%` }}></div>
          </div>
          <div className="flex justify-between mt-2">
            <p>Total Raised: ${totalRaised}</p>
            <p>Opportunity Left: ${opportunityLeft}</p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Potential Return on Investment</h2>
          <p>With a $10,000 investment, the total raised amount would increase to ${investmentReturn}. This additional funding could accelerate the development process and contribute to achieving project milestones more quickly.</p>
        </div>
      </div>
    </div>
  );
};

const InvestPage: React.FC = () => {
  const totalCost = 75000; // Example value
  const totalRaised = 6000; // Example value

  return <CostOverview totalCost={totalCost} totalRaised={totalRaised} />;
};

export default InvestPage;
