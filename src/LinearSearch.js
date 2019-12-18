import React from 'react';

export default class LinearSearch extends React.Component {
	state = {
		data: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
		result: null
	}

	linearSearch = (num) => {
		const data = this.state.data;
		let count = 1;
		for (let i = 0; i < data.length; i++) {
			if (data[i] === num) return `Search found; took ${count} searches to find out`;
			count++;
		}
		return `Search not found; took ${count} searches to find out`;
	}

	binarySearch = (data, value, start, end, count = 0) => {
		var start = start === undefined ? 0 : start;
		var end = end === undefined ? data.length : end;

		if (start > end) {
			return `Search not found; took ${count} searches to find out`;
		}

		const index = Math.floor((start + end) / 2);
		const item = data[index];

		console.log(start, end);
		if (item == value) {
			return `Search found; took ${count} searches to find out`;
		}
		else if (item < value) {
			return this.binarySearch(data, value, index + 1, end, count + 1);
		}
		else if (item > value) {
			return this.binarySearch(data, value, start, index - 1, count + 1);
		}
	}

	submitHandler = (e) => {
		e.preventDefault();
		const num = parseInt(e.target.input.value);

		// const result = this.linearSearch(num);

		const data = this.state.data.sort();
		const result = this.binarySearch(data, num);

		this.setState({
			result
		})
	}

	render() {
		return (
			<div>
				<form onSubmit={e => this.submitHandler(e)}>
					<input type='number' id='input' />
					<button type='submit'>Submit</button>
				</form>
				<p className='result' id='result'>{this.state.result}</p>
			</div>
		)
	}
}