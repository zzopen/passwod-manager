import { ExtractPropTypes } from 'vue'

export type AlertType = 'success' | 'danger' | 'warning' | 'info' | 'simple'

export const loginProps = () => {
  return {
    type: {
      type: String as () => AlertType,
      default: 'info'
    },
    cssClass: {
      type: String,
      default: ''
    },
    closeable: {
      type: Boolean,
      default: true
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    dismissTime: {
      type: Number,
      default: 0
    },
    center: {
      type: Boolean,
      default: false
    }
  }
}

export type LoginProps = Partial<ExtractPropTypes<ReturnType<typeof loginProps>>>
