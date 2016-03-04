import React, { Component } from 'react';
import Applications from './Applications';
import RecruitCard from './RecruitCard';
import PortalSlider from './PortalSlider';
import RecommendedIntern from './RecommendedIntern';

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
        let recommendedIntern = data && this.state.data.data.sections[5]
        // 見た目の定義
        return(
                <div>
                { data ? (
                  <Applications>
                    <PortalSlider>
                        { popularProject.projects.map((project) => {
                            return  <RecruitCard project={project} key={project.id} />
                        })}
                    </PortalSlider>
                    <RecommendedIntern recommendedIntern={recommendedIntern} />
                  </Applications>
                ) : (
                        <p>NOW LOADING</p>
                )}
            </div>
        )
    }
}
