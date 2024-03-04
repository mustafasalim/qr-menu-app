import { Component, ReactNode } from "react"
import Button from "../components/ui/button"

interface Props {
  children?: ReactNode
}

interface State {
  error: any
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      error: false,
    }
  }

  static getDerivedStateFromError(error: any) {
    return {
      error,
    }
  }

  render(): ReactNode {
    if (this.state.error) {
      return (
        <div className="w-full p-4 border-2 rounded-md bg-[color:var(--background-primary)] border-red-500 flex flex-col justify-start gap-y-1">
          <div className="text-red-700 text-[27px] font-bold">Hata</div>
          <div className="text-red-500 ">
            Beklenmedik bir hata oluştu lütfen tekrar deneyiniz.
          </div>
          <div>
            <Button
              onClick={() => {
                this.setState({
                  error: false,
                })
              }}
              variant="danger"
              text="Tekrar deneyiniz"
            />
          </div>
          <details className="mt-4">
            <summary className="text-[color:var(--color-primary)]">
              Hata detayı için tıklayınız
            </summary>
            <pre className="bg-black/10 overflow-y-scroll text-red-500 p-4 rounded-md">
              {this.state.error.stack}
            </pre>
          </details>
        </div>
      )
    }

    return this.props.children
  }
}
