import React from "react";
import {
Box,
Container,
Row,
Column,
Heading,
} from './FooterStyles';
const Footer = () => {
return (
	<Box>
	{/*<h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
		GeeksforGeeks: A Computer Science Portal for Geeks
</h1>*/}
	<Container>
		<Row>
		<Column>
			<Heading>MANSI</Heading>
		</Column>
		<Column>
			<Heading>MANSHA</Heading>
		</Column>
		<Column>
			<Heading>MUSKAN</Heading>
		</Column>
		<Column>
			<Heading>SRIJAN</Heading>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;