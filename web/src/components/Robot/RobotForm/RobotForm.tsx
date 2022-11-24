import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

import type { EditRobotById, UpdateRobotInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormRobot = NonNullable<EditRobotById['robot']>

interface RobotFormProps {
  robot?: EditRobotById['robot']
  onSave: (data: UpdateRobotInput, id?: FormRobot['id']) => void
  error: RWGqlError
  loading: boolean
}

const RobotForm = (props: RobotFormProps) => {
  const onSubmit = (data: FormRobot) => {
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.robot?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormRobot> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>
        
          <TextField
            name="title"
            defaultValue={props.robot?.title}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>
        
          <TextField
            name="description"
            defaultValue={props.robot?.description}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="pairs"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Pairs
        </Label>
        
          <TextField
            name="pairs"
            defaultValue={props.robot?.pairs}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="pairs" className="rw-field-error" />

        <Label
          name="timeframe"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Timeframe
        </Label>
        
          <TextField
            name="timeframe"
            defaultValue={props.robot?.timeframe}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="timeframe" className="rw-field-error" />

        <Label
          name="image"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image
        </Label>
        
          <TextField
            name="image"
            defaultValue={props.robot?.image}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="image" className="rw-field-error" />

        <Label
          name="files"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Files
        </Label>
        
          <TextField
            name="files"
            defaultValue={props.robot?.files}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="files" className="rw-field-error" />

        <Label
          name="published"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Published
        </Label>
        
          <CheckboxField
            name="published"
            defaultChecked={props.robot?.published}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="published" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default RobotForm
