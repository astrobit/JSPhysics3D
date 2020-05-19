/** 
@brief A javascript implementation of a 2x2 Matrix
@details 
@author Brian W. Mulligan
@version 1.0.0
@date May 2020
@copyright MIT License
*/

class TwoMatrix
{
/** 
TwoMatrix constructor. If the parameter is null or not a valid type, the matrix will be initiailized as a zero matrix.
@param otherTwoMatrix a structure containing the value with which to initialize the matrix. otherTwoMatrix may be a TwoMatrix, an Array with 9 values (assumed to be in row order, or an Array containing three Arrays, each with length 3, and assumed to be in [row][column] order.
*/
	constructor (otherTwoMatrix)
	{
		this._data = new Array();
		var TcI,TcJ;
		for (TcI = 0; TcI < 2; TcI++)
		{
			var temp = new Array();
			for (TcJ = 0; TcJ < 2; TcJ++)
			{
				if (otherTwoMatrix != null)
				{
					if (otherTwoMatrix instanceof TwoMatrix)
						temp.push(otherTwoMatrix.at(TcI,TcJ));
					else if (otherTwoMatrix instanceof Array)
					{
						if (otherTwoMatrix.length == 4)
						{
							temp.push(otherTwoMatrix[TcI * 2 + TcJ]);
						}
						else if (otherTwoMatrix.length == 2 && otherTwoMatrix[0].length == 2 && otherTwoMatrix[1].length == 2)
						{
							temp.push(otherTwoMatrix[TcI][TcJ]);
						}
						else
							temp.push(0);
					}
					else
						temp.push(0);
				}
				else
					temp.push(0);
			}
			this._data.push(temp);
		}
	}
/** 
Retreive the value of the element at the given row and column, zero indexed
@param row the zero indexed row from which to retrieve an element
@param column the zero indexed column from which to retrieve an element
@returns the value at the selected row and column, null otherwise
*/
	at(row, column)
	{
		if (row >= 0 && row < 2 && column >= 0 && column < 2 )
			return this._data[row][column];
		else
			return null;
	}

/** 
Set the value of the element at the given row and column, zero indexed
@param row the zero indexed row from which to set an element
@param column the zero indexed column from which to set an element
@param value the value to insert into the matrix.
*/
	setat(row,column,value)
	{
		if (row >= 0 && row < 2 && column >= 0 && column < 2 )
			this._data[row][column] = value;
	}

/** 
Retrieve a row vector for a given row
@param row the zero indexed row from which to retrieve
@returns If row is a valid index, then a TwoVector containing the row data, otherwise null
*/
	row(rowNum)
	{
		if (rowNum != null && rowNum >= 0 && rowNum < 2)
		{
			return new TwoVector(this._data[rowNum][0],this._data[rowNum][1]);
		}
		else
			return null;
	}
/** 
Retrieve a column vector for a given column
@param column the zero indexed column from which to retrieve
@returns If column is a valid index, then a TwoVector containing the column data, otherwise null
*/
	column(columnNum)
	{
		if (columnNum != null && columnNum >= 0 && columnNum < 2)
		{
			return new TwoVector(this._data[0][columnNum],this._data[1][columnNum]);
		}
		else
			return null;
	}

/** 
Perform a matrix multiplication with a column vector
@param vector the TwoVector by which the matrix is multiplied
@returns the value at the selected row and column, null otherwise
*/
	dotVector(vector)
	{
		if (vector != null && vector instanceof TwoVector)
		{
			return new TwoVector(this._data[0][0] * vector.x + this._data[0][1] * vector.y,
							this._data[1][0] * vector.x + this._data[1][1] * vector.y
							);
		}
		else
			return null;
	}
/** 
Perform a scalar multiplication of a three matrix
@param matrix the TwoMatrix by which the matrix is multiplied
@returns if matrix is a TwoMatrix, then a new TwoMatrix containing the result of the multiplication, otherwise null
*/
	scale(scalar)
	{
		var ret = new TwoMatrix();

		var TcI,TcJ;
		for (TcI = 0; TcI < 2; TcI++)
		{
			for (TcJ = 0; TcJ < 2; TcJ++)
			{
				ret._data[TcI][TcJ] = this._data[TcI][TcJ] * scalar;
			}
		}
		return ret;
	}
/** 
Perform a matrix multiplication with a TwoMatrix
@param matrix the TwoMatrix by which the matrix is multiplied
@returns if matrix is a TwoMatrix, then a new TwoMatrix containing the result of the multiplication, otherwise null
*/
	multiply(matrix)
	{
		if (matrix != null && matrix instanceof TwoMatrix)
		{
			var ret = new TwoMatrix();

			var TcI,TcJ;
			for (TcI = 0; TcI < 2; TcI++)
			{
				for (TcJ = 0; TcJ < 2; TcJ++)
				{
					ret.setat(TcI,TcJ,this.row(TcI).dot(matrix.column(TcJ)));
				}
			}
			return ret;
		}
		else
			return null;
	}
/** 
Perform a matrix addition with a TwoMatrix
@param matrix the TwoMatrix which the matrix is added
@returns if matrix is a TwoMatrix, then a new TwoMatrix containing the result of the addition, otherwise null
*/
	add(matrix)
	{
		if (matrix != null && matrix instanceof TwoMatrix)
		{
			var ret = new TwoMatrix();

			var TcI,TcJ;
			for (TcI = 0; TcI < 2; TcI++)
			{
				for (TcJ = 0; TcJ < 2; TcJ++)
				{
					ret._data[TcI][TcJ] = this._data[TcI][TcJ] + matrix._data[TcI][TcJ];
				}
			}
			return ret;
		}
		else
			return null;
	}
/** 
Perform a matrix subtraction with a TwoMatrix
@param matrix the TwoMatrix which is to be subtracted from this matrix
@returns if matrix is a TwoMatrix, then a new TwoMatrix containing the result of the subtraction, otherwise null
*/
	subtract(matrix)
	{
		if (matrix != null && matrix instanceof TwoMatrix)
		{
			var ret = new TwoMatrix();

			var TcI,TcJ;
			for (TcI = 0; TcI < 2; TcI++)
			{
				for (TcJ = 0; TcJ < 2; TcJ++)
				{
					ret._data[TcI][TcJ] = this._data[TcI][TcJ] - matrix._data[TcI][TcJ];
				}
			}
			return ret;
		}
		else
			return null;
	}
/** 
Perform a matrix transpose
@returns A new TwoMatrix containing the result of the transposition
*/
	transpose()
	{
		var ret = new TwoMatrix();
		var TcI,TcJ;
		for (TcI = 0; TcI < 2; TcI++)
		{
			for (TcJ = 0; TcJ < 2; TcJ++)
			{
				ret._data[TcI][TcJ] = this._data[TcJ][TcI];
			}
		}
		return ret;
	}
/** 
Get the additive inverse of a matrix
@returns A new TwoMatrix containing the result of the negation
*/
	negate()
	{
		var ret = new TwoMatrix();
		var TcI,TcJ;
		for (TcI = 0; TcI < 2; TcI++)
		{
			for (TcJ = 0; TcJ < 2; TcJ++)
			{
				ret._data[TcI][TcJ] = -this._data[TcI][TcJ];
			}
		}
		return ret;
	}
/**
Get the determinant of the matrix
@returns The determinant of the matrix
*/
	determinant()
	{
		return this._data[0][0] * this._data[1][1] - this._data[0][1] * this._data[1][0];
	}
	
/**
Get the trace of the matrix
@returns The trace of the matrix
*/
	trace()
	{
		return this._data[0][0] + this._data[1][1];
	}
/**
Get the inverse of the matrix
@returns A new TwoMatrix containing the multiplicitave inverse
*/
	invert()
	{
		var ret = null;
		var det = this.determinant();
		if (det != 0.0)
		{
			var invdet = 1.0 / det;
			ret = new TwoMatrix();
			ret._data[0][0] = invdet * this._data[1][1];
			ret._data[0][1] = -invdet * this._data[0][1];
			ret._data[1][0] = -invdet * this._data[1][0];
			ret._data[1][1] = invdet * this._data[0][0];
		}
		else
			console.log("TwoMatrix error: Inverting a zero matrix");
		return ret;
	}
/** 
Load the zero matrix
@returns none
*/
	loadZero()
	{
		var TcI,TcJ;
		for (TcI = 0; TcI < 2; TcI++)
		{
			for (TcJ = 0; TcJ < 2; TcJ++)
			{
				this._data[TcI][TcJ] = 0;
			}
		}
	}
/** 
Load the identity matrix
@returns none
*/
	loadIdentity()
	{
		var TcI,TcJ;
		for (TcI = 0; TcI < 2; TcI++)
		{
			for (TcJ = 0; TcJ < 2; TcJ++)
			{
				if (TcI == TcJ)
					this._data[TcI][TcJ] = 1.0;
				else
					this._data[TcI][TcJ] = 0;
			}
		}
	}
}
