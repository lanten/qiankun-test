import React from 'react'
import { Button, Card } from 'antd'

interface DemoProps extends PageProps {
  id?: number
}

declare interface DemoState {
  count: number
}

export default class Demo extends React.Component<DemoProps, DemoState> {
  state: DemoState = {
    count: 1,
  }

  componentDidMount() {
    console.log(this)
  }

  render() {
    const { count } = this.state
    return (
      <Card title="app-react-2" className="full-screen-min">
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
} // class Demo end
