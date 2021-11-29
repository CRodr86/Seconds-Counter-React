//Import React
import React from "react";

//Import PropTypes
import PropTypes from "prop-types";

//Import icon
import { FaRegClock } from "react-icons/fa";

//Component code
const SecondsCounter = props => {
	return (
		<div className="container-fluid bg-dark text-white fs-1">
			<div className="row d-flex justify-content-center">
				<div className="col-1">
					<a>
						<FaRegClock />
					</a>
				</div>
				<div className="col-1">
					<a>{Math.floor(props.count / 1000) % 10}</a>
				</div>
				<div className="col-1">
					<a>{Math.floor(props.count / 100) % 10}</a>
				</div>
				<div className="col-1">
					<a>{Math.floor(props.count / 10) % 10}</a>
				</div>
				<div className="col-1">
					<a>{Math.floor(props.count) % 10}</a>
				</div>
			</div>
		</div>
	);
};

//PropType validation
SecondsCounter.propTypes = {
	count: PropTypes.number
};

export default SecondsCounter;
