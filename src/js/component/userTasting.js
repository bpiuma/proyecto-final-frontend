import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import DataTable, { defaultThemes } from "react-data-table-component";
import ArrowDownward from "@material-ui/icons/ArrowDownward";

export const UserTasting = () => {
	const { store, actions } = useContext(Context);
	const [data, setData] = useState();

	const user = store.token ? actions.parseJWT(store.token).user : "User Not Logged in";

	const showMyTastingsProducts = async () => {
		await actions.getTasting(user.id);
		setData(store.tasting);
	};
	showMyTastingsProducts();
	const sortIcon = <ArrowDownward />;
	const customStyles = {
		header: {
			style: {
				minHeight: "56px"
			}
		},
		headRow: {
			style: {
				borderTopStyle: "solid",
				borderTopWidth: "1px",
				borderTopColor: defaultThemes.default.divider.default
			}
		},
		headCells: {
			style: {
				"&:not(:last-of-type)": {
					borderRightStyle: "solid",
					borderRightWidth: "1px",
					borderRightColor: defaultThemes.default.divider.default
				}
			}
		},
		cells: {
			style: {
				"&:not(:last-of-type)": {
					borderRightStyle: "solid",
					borderRightWidth: "1px",
					borderRightColor: defaultThemes.default.divider.default
				}
			}
		}
	};

	const columns = [
		{
			name: "Id",
			selector: "id",
			sortable: true
		},
		{
			name: "Title",
			selector: "product.title",
			sortable: true
		},
		{
			name: "Variety",
			selector: "product.variety"
		},
		{
			name: "Winery",
			selector: "product.winery"
		},
		{
			name: "Start Date",
			selector: "start_date",
			sortable: true,
			right: true
		},
		{
			name: "End Date",
			selector: "end_date",
			sortable: true,
			right: true
		},
		{
			name: "Price for tasting product",
			selector: "price",
			sortable: true,
			right: true
		}
	];

	return (
		<>
			<div className="container-fluid py-2">
				<DataTable
					title="My Tasting of Products"
					columns={columns}
					data={data}
					customStyles={defaultThemes}
					sortIcon={sortIcon}
					striped
					highlightOnHover
				/>
			</div>
		</>
	);
};
