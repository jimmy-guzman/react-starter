import { XLink } from '@/components/XLink'
import { features } from '@/config/features'
import { PageLayout } from '@/layouts/PageLayout'

export default function Features() {
  return (
    <PageLayout>
      <div className='prose dsy-prose pt-10 lg:prose-xl'>
        <h1>Features</h1>
        <dl>
          {features.map(({ feature, icon, description }) => (
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
