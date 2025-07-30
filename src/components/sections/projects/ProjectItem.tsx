interface ProjectItemProps {
  title: string;
  description: string;
  timeline: string;
  stack: string[];
  features: string[];
  image: string;
  link: string;
}

export default function ProjectItem({
  title,
  description,
  timeline,
  stack,
  features,
  image,
  link,
}: ProjectItemProps) {
  return (
    <li className="mb-12 group">
      <div className="relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-blue-900/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
        
        <div className="z-10 sm:col-span-5">
          <h3>
            <a
              className="inline-flex items-baseline font-medium leading-tight text-blue-200 hover:text-blue-100 focus-visible:text-blue-100 group/link text-base"
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
              <span>{title}</span>
            </a>
          </h3>
          
          <p className="mt-2 text-sm leading-normal text-blue-300">
            {description}
          </p>
          
          <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-blue-400/80">
            {timeline}
          </p>
          
          <ul className="mt-2 text-sm leading-normal text-blue-200">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                {feature}
              </li>
            ))}
          </ul>
          
          <ul className="mt-2 flex flex-wrap">
            {stack.map((tech, i) => (
              <li key={i} className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-blue-900/40 px-3 py-1 text-xs font-medium leading-5 text-blue-300 hover:bg-blue-800/60 transition-colors">
                  {tech}
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="relative sm:col-span-3">
          <img
            className="w-full rounded-lg border-2 border-blue-800/30 transition-all duration-300 group-hover:scale-105 group-hover:border-blue-500/50"
            src={image}
            alt={`${title} screenshot`}
          />
        </div>
      </div>
    </li>
  );
}