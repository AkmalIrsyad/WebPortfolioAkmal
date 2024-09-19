import PAST_ROLES from '@/data/experience'

export default function Experience() {
  return (
    <div className="mb-16">
        <h1 className="mb-8 text-2xl font-heading sm:text-4xl mt-7">Certificate & Study</h1>
      {PAST_ROLES.map((role, id) => (
        <div className="mb-8" key={id}>
          <h3 className="text-lg font-heading sm:text-xl">
            {role.role} @ {''}
            <a
              href={role.company.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {role.company.name}
            </a>
          </h3>

          <p className="mb-4 mt-0.5 text-sm">
            {role.startDate} - {role.endDate}
          </p>
          <p>{role.description}</p>
        </div>
      ))}
    </div>
  )
}
