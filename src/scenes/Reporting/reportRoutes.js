
import { Reports } from ".";
import ReportView from "./components/report-view";

export default {
    path: "/reporting",
    component: Reports,
    strict: true,
    routes: [
        {
            path: "/reporting/view",
            component: ReportView,
            exact: true,
            isProtected: false,
        }
    ]
}

