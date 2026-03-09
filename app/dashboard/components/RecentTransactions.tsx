export default function RecentTransactions() {
  const transactions = [
    { id: "ALK-8923-901", name: "Faith Otieno", amount: "KES 12,500", status: "SUCCESS" },
    { id: "ALK-8923-902", name: "John Karanja", amount: "KES 45,000", status: "PENDING" },
    { id: "ALK-8923-901", name: "Faith Otieno", amount: "KES 12,500", status: "SUCCESS" },
    { id: "ALK-8923-902", name: "John Karanja", amount: "KES 45,000", status: "PENDING" },
    { id: "ALK-8923-901", name: "Faith Otieno", amount: "KES 12,500", status: "SUCCESS" },
    { id: "ALK-8923-902", name: "John Karanja", amount: "KES 45,000", status: "PENDING" },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
      <div className="p-6 border-b border-slate-50 flex justify-between items-center">
        <h3 className="font-bold text-slate-700 text-sm uppercase">Recent Transactions</h3>
        <button className="text-xs font-bold text-blue-500 hover:underline uppercase">View All</button>
      </div>
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-50/50 text-slate-400 text-[10px] font-bold uppercase">
          <tr>
            <th className="px-6 py-4">Ref ID</th>
            <th className="px-6 py-4">Beneficiary</th>
            <th className="px-6 py-4">Amount</th>
            <th className="px-6 py-4">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {transactions.map((tx, i) => (
            <tr key={i} className="hover:bg-slate-50/50 transition-colors">
              <td className="px-6 py-2 text-xs font-medium text-slate-600">{tx.id}</td>
              <td className="px-6 py-2 text-xs text-slate-600">{tx.name}</td>
              <td className="px-6 py-2 text-xs font-bold text-slate-800">{tx.amount}</td>
              <td className="px-6 py-2">
                <span className={`px-2 py-1 text-xs rounded text-[10px] font-bold ${
                  tx.status === 'SUCCESS' ? 'bg-emerald-50 text-emerald-600' : 'bg-orange-50 text-orange-600'
                }`}>
                  {tx.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}