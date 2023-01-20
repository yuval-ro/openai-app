import React, { useState } from 'react';

import { Container, Row, Col, Form, Button } from 'react-bootstrap'

import { } from 'react-router-dom';

import DBController from '../../components/DBController/DBController';
import Logs from '../../components/Logs/Logs';
import './Admin.css';


const Admin = () => {


	return (
		<React.Fragment>
			<h2>Database</h2>
			<DBController />
			<Logs />
		</React.Fragment>
	)
}

export default Admin;