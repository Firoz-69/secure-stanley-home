import { Shield, TrendingDown, Award, AlertTriangle } from 'lucide-react';

const facts = [
  {
    icon: Shield,
    percentage: 95,
    title: 'Injury Reduction',
    description: 'Proper safety equipment reduces workplace injuries by up to 95%',
    color: 'text-success-green',
    bgColor: 'bg-success-green/10',
  },
  {
    icon: TrendingDown,
    percentage: 78,
    title: 'Cost Savings',
    description: 'Companies save 78% on insurance premiums with comprehensive safety programs',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: Award,
    percentage: 92,
    title: 'Compliance Rate',
    description: 'Our products help achieve 92% safety compliance in audited workplaces',
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
  },
  {
    icon: AlertTriangle,
    percentage: 85,
    title: 'Accident Prevention',
    description: 'Quality safety gear prevents 85% of potential workplace accidents',
    color: 'text-warning-yellow',
    bgColor: 'bg-warning-yellow/10',
  },
];

const SafetyFacts = () => {
  return (
    <section className="py-20 gradient-industrial">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Safety Facts & Statistics
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Real data that demonstrates the critical importance of quality safety equipment in protecting lives and reducing workplace incidents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${fact.bgColor} rounded-full mb-6`}>
                  <Icon className={`h-8 w-8 ${fact.color}`} />
                </div>
                
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">
                    {fact.percentage}%
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {fact.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {fact.description}
                  </p>
                </div>

                {/* Progress Circle */}
                <div className="relative w-24 h-24 mx-auto mt-6">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                    {/* Background circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="8"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="white"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 45}`}
                      strokeDashoffset={`${2 * Math.PI * 45 * (1 - fact.percentage / 100)}`}
                      className="animate-counter"
                      style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{fact.percentage}%</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              The Bottom Line: Safety Saves Lives and Money
            </h3>
            <p className="text-gray-200 text-lg leading-relaxed">
              Investing in quality safety equipment isn't just about compliance – it's about creating a culture where every worker returns home safely every day. The statistics speak for themselves: proper safety measures dramatically reduce incidents, save costs, and protect your most valuable asset – your people.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyFacts;