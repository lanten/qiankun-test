import React from 'react'
import { Button, Card } from 'antd'

declare interface State {
  count: number
}

export default class AppReact extends React.Component<PageProps, State> {
  state: State = {
    count: 1,
  }

  componentDidMount() {
    console.log(this)
  }

  render() {
    const { count } = this.state
    return (
      <Card title="app-react">
        <p>state count : {count}</p>
        <div className="mt-16">
          <Button
            type="primary"
            onClick={() => {
              this.setState({ count: count + 1 })
            }}
          >
            add
          </Button>

          <Button
            className="ml-16"
            onClick={() => {
              this.queryData()
            }}
          >
            request
          </Button>
        </div>
      </Card>
    )
  }

  queryData() {
    $api.test.queryTestInfo({}).then((res) => {
      console.log(res)
    })
  }
} // class AppReact end
