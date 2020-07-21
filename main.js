import {ToyReact, Component} from './toyReact.js'

class  MyComponent extends Component {
    render () {
        return <div>
            <span>Hello,</span>
            <span>word!</span>
            <div> {this.children} </div>
        </div>
    }
    
}

let a =  <MyComponent name='a' id="ids" >
    <div>winter</div>
</MyComponent>

ToyReact.render(
    a,
    document.getElementById('app')
)
