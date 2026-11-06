import { Section } from '@/shared/ui'
import { principles, steps } from '../model/content'
import s from './AiWorkflow.module.css'

export function AiWorkflow() {
  return (
    <Section
      id="ai-workflow"
      title="AI를 이렇게 씁니다"
      lead="AI는 속도를 내는 도구이고, 결과물의 품질은 제가 책임집니다. 실제 업무에서 쓰는 순서를 그대로 적었습니다."
    >
      <ol className={s.steps}>
        {steps.map((step, i) => (
          <li key={step.title} className={s.step}>
            <span className={s.num} aria-hidden="true">{i + 1}</span>
            <h3 className={s.stepTitle}>{step.title}</h3>
            <p className={s.stepText}>{step.text}</p>
          </li>
        ))}
      </ol>

      <div className={s.bottom}>
        <h3 className={s.subTitle}>지키는 원칙</h3>
        <ul className={s.principles}>
          {principles.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
