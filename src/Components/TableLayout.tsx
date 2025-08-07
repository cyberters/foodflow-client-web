import React from "react";

const TableLayout: React.FC = () => {
    return (
        <table className="table-auto border border-gray-400">
            <thead>
                <tr>
                    <th className="border border-gray-400 px-2 py-1">Imię</th>
                    <th className="border border-gray-400 px-2 py-1">Wiek</th>
                    <th className="border border-gray-400 px-2 py-1">Płeć</th>
                    <th className="border border-gray-400 px-2 py-1">Waga [kg]</th>
                    <th className="border border-gray-400 px-2 py-1">Aktywność</th>
                    <th className="border border-gray-400 px-2 py-1">Wzrost</th>
                    <th className="border border-gray-400 px-2 py-1">Alergie</th>
                    <th className="border border-gray-400 px-2 py-1 font-bold">Dzienne zapotrzebowanie kcal</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border border-gray-400 px-2 py-1">Dominik</td>
                    <td className="border border-gray-400 px-2 py-1">26</td>
                    <td className="border border-gray-400 px-2 py-1">M</td>
                    <td className="border border-gray-400 px-2 py-1">89</td>
                    <td className="border border-gray-400 px-2 py-1">1.2</td>
                    <td className="border border-gray-400 px-2 py-1">176</td>
                    <td className="border border-gray-400 px-2 py-1">Brak</td>
                    <td className="border border-gray-400 px-2 py-1 font-bold">2500</td>
                </tr>
            </tbody>
        </table>
    )
}

export default TableLayout;
