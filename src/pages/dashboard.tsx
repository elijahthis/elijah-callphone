import { Logo } from "../svgs";

const Dashboard = () => (
    <div className="DashboardPage">
        <Logo />
        <div className="card">
            <h3>Hi John!</h3>
            <p>Thank you for using our service</p>
            <p className="logout">Logout</p>
        </div>
    </div>
);

export default Dashboard;
