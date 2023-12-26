import { useSuspenseQuery } from '@tanstack/react-query'

import { featuresQueryOptions } from '@/api/features'
import { XLink } from '@/components/XLink'
import { PageLayout } from '@/layouts/PageLayout'

export default function Features() {
  const { data } = useSuspenseQuery(featuresQueryOptions)

  return (
    <PageLayout>
      <div className='prose dsy-prose pt-10 lg:prose-xl'>
        <h1>Features</h1>
        <dl>
          {data.map(({ feature, icon, description }) => (
            <div key={feature}>
              <dt>
                {icon} <XLink to={feature} />
              </dt>
              <dd>{description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </PageLayout>
  )
}
