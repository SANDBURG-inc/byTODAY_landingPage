interface ProgressBarProps {
    current: number;
    total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
    const percentage = Math.min(Math.round((current / total) * 100), 100);

    return (
        <div className="w-full">
            <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-600 font-medium">진행률</span>
                <span className="text-blue-600 font-bold">{percentage}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                <div
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-in-out"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
}
