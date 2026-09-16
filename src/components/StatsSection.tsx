'use client';

const stats = [
  { number: '76', label: 'Năm truyền thống', suffix: '+' },
  { number: '500', label: 'Học viên/năm', suffix: '+' },
  { number: '200', label: 'Giảng viên', suffix: '+' },
  { number: '15', label: 'Khoa chuyên ngành', suffix: '' },
];

export default function StatsSection() {
  return (
    <div className="gradient-blue rounded-xl overflow-hidden shadow-lg">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`text-center py-6 px-4 ${
              i !== stats.length - 1 ? 'border-r border-white/10' : ''
            }`}
          >
            <div className="text-2xl md:text-3xl font-extrabold text-[var(--accent)]">
              {stat.number}
              <span className="text-lg">{stat.suffix}</span>
            </div>
            <p className="text-white/70 text-xs md:text-sm mt-1 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
