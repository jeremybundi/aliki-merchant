import { AlertCircle, RefreshCw, TrendingUp, CheckCircle2 } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  footerText: string;
  variant: 'warning' | 'info' | 'success';
}

export default function StatCard({ title, value, footerText, variant }: StatCardProps) {
  const styles = {
    warning: { text: 'text-orange-500', icon: AlertCircle, bg: 'bg-white' },
    info: { text: 'text-emerald-500', icon: RefreshCw, bg: 'bg-white' },
    success: { text: 'text-blue-500', icon: TrendingUp, bg: 'bg-white' },
  };

  const Icon = styles[variant].icon;

  return (
    <div className="bg-white p-4 rounded-2xl border border-slate-100  flex flex-col justify-between">
      <div>
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{title}</h3>
        <p className="text-xl font-bold text-[#1e293b]">{value}</p>
      </div>
      <div className={`mt-2 flex items-center gap-2 text-xs font-bold uppercase ${styles[variant].text}`}>
        <Icon size={14} />
        {footerText}
      </div>
    </div>
  );
}