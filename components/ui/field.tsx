import {Box, Field as ChakraField, Text} from "@chakra-ui/react"
import * as React from "react"
import {Tooltip} from "@/components/ui/tooltip";

export interface FieldProps extends Omit<ChakraField.RootProps, "label"> {
  label?: React.ReactNode
  helperText?: React.ReactNode
  errorText?: React.ReactNode
  optionalText?: React.ReactNode
  icon?: React.ReactNode
  iconOnClick?: () => void
  iconTooltip?: string
  iconTooltipOpenDelay?: number
  iconTooltipCloseDelay?: number
}

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  function Field(props, ref) {
    const {label, children, helperText, errorText, optionalText, icon, iconOnClick, iconTooltip, iconTooltipOpenDelay =0, iconTooltipCloseDelay = 0, ...rest} =
      props
    return (
      <ChakraField.Root ref={ref} {...rest}>
        <ChakraField.Label>
          {label && (
            <Text>{label}</Text>
          )}
          <ChakraField.RequiredIndicator fallback={optionalText}/>
          {icon && (
            <Tooltip showArrow openDelay={iconTooltipOpenDelay} closeDelay={iconTooltipCloseDelay} content={iconTooltip} disabled={iconTooltip === ''}>
              <Box className={'ml-2'} cursor={(iconOnClick) ? 'pointer' : 'default'} onClick={iconOnClick}>
                {icon}
              </Box>
            </Tooltip>
          )}
        </ChakraField.Label>
        {children}
        {helperText && (
          <ChakraField.HelperText>{helperText}</ChakraField.HelperText>
        )}
        {errorText && (
          <ChakraField.ErrorText>{errorText}</ChakraField.ErrorText>
        )}
      </ChakraField.Root>
    )
  },
)
