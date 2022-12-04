import {
  Label,
  Input,
  StyledInlineErrorMessage,
  InputWrapper,
} from './StyledOpenResponse';
import type { OpenResponseProps } from '.';

function OpenResponse({
  rows,
  cols,
  label,
  id,
  placeholder,
  required = false,
  disabled = false,
  error,
  touched,
}: OpenResponseProps) {
  return (
    <>
      <Label htmlFor={label}>
        {label} {required && <span style={{ color: 'red' }}>*</span>}
        <InputWrapper>
          <Input
            placeholder={placeholder}
            rows={rows}
            cols={cols}
            name={label}
            id={id}
            autoCorrect="off"
            autoComplete="off"
            valid={touched && !error}
            error={error}
            disabled={disabled}
          />
        </InputWrapper>
      </Label>
      {error && touched && (
        <StyledInlineErrorMessage>{error}</StyledInlineErrorMessage>
      )}
    </>
  );
}

export default OpenResponse;
