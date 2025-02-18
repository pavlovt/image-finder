import { Button, Label, Select, TextInput } from 'flowbite-react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TFilterForm } from '../core/types'

type TProps = {
  filter: (data: TFilterForm) => void
}

type fields = 'firstName' | 'lastName' | 'topic' | 'other'

export default function ImageFilter({ filter }: TProps) {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm<TFilterForm>()
  const onSubmit: SubmitHandler<TFilterForm> = (data: TFilterForm) => filter(data)
  const errorClass = ''

  watch(['topic'])
  const vals = getValues()
  const topicOptions: string[] = ['Travel', 'Cars', 'Wildlife', 'Technology', 'Other']

  const required = (field: fields) => {
    let res = <span className="text-xs">&nbsp;</span>
    if (errors[field]) {
      res = (
        <span className="text-xs text-red-500" aria-invalid="true" aria-errormessage="This field is required">
          This field is required
        </span>
      )
    }

    return res
  }

  const errorState = (field: fields) => {
    let res
    if (errors[field]) {
      res = 'failure'
    }

    return res ? { color: res } : {}
  }

  return (
    <form className="flex items-end justify-center gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label className="mb-3" htmlFor="firstName" value="Your first name" />
        <TextInput
          autoFocus
          id="firstName"
          placeholder="Enter your first name"
          data-testid="first-name-input"
          {...errorState('firstName')}
          {...register('firstName', { required: true })}
        />
        {required('firstName')}
        {errorClass}
      </div>
      <div>
        <Label className="mb-3" htmlFor="lastName" value="Your last name" />
        <TextInput
          id="lastName"
          placeholder="Enter your last name"
          data-testid="last-name-input"
          {...errorState('lastName')}
          {...register('lastName', { required: true })}
        />
        {required('lastName')}
      </div>
      <div>
        <Label className="mb-3" htmlFor="topic" value="Select a topic" />
        <Select
          id="topic"
          data-testid="topic-select"
          {...errorState('topic')}
          {...register('topic', { required: true })}>
          <option value="">Select a topic</option>
          {topicOptions.map(topic => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </Select>
        {required('topic')}
      </div>
      {vals.topic === 'Other' && (
        <div>
          <Label className="mb-3" htmlFor="other" value="Other" />
          <TextInput
            id="other"
            placeholder="Enter your topic"
            data-testid="other-input"
            {...errorState('other')}
            {...register('other', { required: vals.topic === 'Other' })}
          />
          {required('other')}
        </div>
      )}
      <div>
        <Button data-testid="submit-button" type="submit">
          Search
        </Button>
        <span className="text-xs">&nbsp;</span>
      </div>
    </form>
  )
}
