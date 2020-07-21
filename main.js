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

let a =  <myComponent name='a' id="ids" >
    <div>winter</div>
</myComponent>

ToyReact.render(
    a,
    document.getElementById('app')
)
