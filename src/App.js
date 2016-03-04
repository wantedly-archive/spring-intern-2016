
import React, { Component } from 'react';
import PortalProject from './PortalProject';
import PortalSlider from './PortalSlider';
import styles from './style.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        // 状態の定義
        this.state = { message: "Reactのシンプルなコンポーネントです" };
    }

    componentDidMount() {
        this.fetchPortalData();
    }

    async  fetchPortalData() {
        // Create headers
        let headers = new Headers();
        headers.append('Authorization', `Basic ${btoa('spring:intern_2016')}`);

        // Call API
        let res = await fetch("https://www.wantedlyapp.com/api/intern/portal", { headers });
        let json = await res.json();
        console.log(json);
        this.setState({
            data: json
        });
    }

    render() {
        let data = this.state.data
        let popularProject = data && this.state.data.data.sections[3]
        // 見た目の定義
        return(
                <div>
                { data ? (
                        <PortalSlider>
                        { popularProject.projects.map((project) => {
                            return  <PortalProject project={project} key={project.id} />
                        })}
                    </PortalSlider>
                ) : (
                        <p>NOW LOADING</p>
                )}
            </div>
        )
    }
}
