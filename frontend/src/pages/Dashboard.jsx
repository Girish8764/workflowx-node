import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";

function Dashboard() {

    return (

        <DashboardLayout>

            <h1 className="text-4xl font-bold mb-8">

                Dashboard

            </h1>

            <div className="grid grid-cols-4 gap-6">

                <StatCard
                    title="Employees"
                    value="125"
                    color="#2563EB"
                />

                <StatCard
                    title="Departments"
                    value="8"
                    color="#7C3AED"
                />

                <StatCard
                    title="Projects"
                    value="21"
                    color="#16A34A"
                />

                <StatCard
                    title="Revenue"
                    value="$54K"
                    color="#EA580C"
                />

            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">

                <div className="bg-slate-900 rounded-2xl p-8 h-80">

                    <h2 className="text-2xl font-semibold mb-4">

                        Employee Analytics

                    </h2>

                    <div className="flex items-center justify-center h-52 text-slate-400">

                        Chart Coming Next

                    </div>

                </div>

                <div className="bg-slate-900 rounded-2xl p-8 h-80">

                    <h2 className="text-2xl font-semibold mb-4">

                        Recent Activity

                    </h2>

                    <div className="space-y-4">

                        <p>✅ New Employee Joined</p>

                        <p>✅ Department Updated</p>

                        <p>✅ Salary Revised</p>

                        <p>✅ Profile Updated</p>

                    </div>

                </div>

            </div>

        </DashboardLayout>

    );

}

export default Dashboard;
