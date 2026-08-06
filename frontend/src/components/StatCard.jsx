function StatCard({ title, value, color }) {

    return (

        <div className="rounded-2xl p-6 shadow-lg"
            style={{ background: color }}>

            <p className="text-white/80">

                {title}

            </p>

            <h2 className="text-4xl font-bold text-white mt-3">

                {value}

            </h2>

        </div>

    );

}

export default StatCard;
