import ChainCard from './ChainCard';
import RiskScore from './RiskScore';
import EmptyState from '../ui/EmptyState';

export default function RiskPanel({
  chains,
  overallScore,
  onViewPath,
  onSeeFixes
}) {

  if (!chains || chains.length === 0) {
    return (
      <div className="bg-bg-secondary border border-border rounded-card p-8">

        <h3 className="text-3xl font-bold mb-6">
          Risk Analysis
        </h3>

        <div className="flex justify-center mb-6">
          <RiskScore score={overallScore || 0} />
        </div>

        <EmptyState
          title="No attack chains detected"
          description="No exploitable attack paths were found. This domain looks well-configured."
        />
      </div>
    );
  }

  return (
    <div className="bg-bg-secondary border border-border rounded-card p-8 space-y-6">

      <div className="flex items-center justify-between">

        <h3 className="text-3xl font-bold">
          Risk Analysis
        </h3>

        <RiskScore score={overallScore || 0} />

      </div>

      <div className="space-y-5 max-h-[500px] overflow-y-auto pr-2">

        {chains.map((chain) => (
          <ChainCard
            key={chain.id || chain.rule_id}
            chain={chain}
            onViewPath={() => onViewPath?.(chain)}
            onSeeFixes={() => onSeeFixes?.(chain)}
          />
        ))}

      </div>

    </div>
  );
}