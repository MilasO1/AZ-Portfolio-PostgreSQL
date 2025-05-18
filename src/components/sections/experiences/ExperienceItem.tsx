interface ExperienceItemProps {
  timeline: string;
  title: string;
  entreprise: string;
  description: string[];
}

export default function ExperienceItem({
  timeline,
  title,
  entreprise,
  description,
}: ExperienceItemProps) {
  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-blue-900/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <p className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2">
          {timeline}
        </p>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-slate-200">
            <div>
              <p className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-blue-300 focus-visible:text-blue-300 group/link text-base">
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                <span>{title}</span>
              </p>
            </div>
            <div>
              <div className="text-slate-400">{entreprise}</div>
            </div>
          </h3>
          <ol className="mt-2 text-sm leading-normal text-slate-200">
            {description.map((d, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                {d}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </li>
  );
}
