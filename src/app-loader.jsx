import * as ReactDOM from "react-dom";
import * as React from "react";
import {Layout} from "./layout/layout";
import {SamplePage} from "./sample-page";

ReactDOM.render((
    <Layout>
        <SamplePage/>
    </Layout>
), document.getElementById("app-container"));
