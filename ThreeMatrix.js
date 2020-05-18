/** 
@brief A javascript implementation of a 3x3 Matrix
@details 
@author Brian W. Mulligan
@version 1.0.0
@date May 2020
@copyright MIT License
*/

class ThreeMatrix
{
/** 
ThreeMatrix constructor. If the parameter is null or not a valid type, the matrix will be initiailized as a zero matrix.
@param otherThreeMatrix a structure containing the value with which to initialize the matrix. otherThreeMatrix may be a ThreeMatrix, an Array with 9 values (assumed to be in row order, or an Array containing three Arrays, each with length 3, and assumed to be in [row][column] order.
*/
	constructor (otherThreeMatrix)
	{
		this._data = new Array();
		var TcI,TcJ;
		for (TcI = 0; TcI < 3; TcI++)
		{
			var temp = new Array();
			for (TcJ = 0; TcJ < 3; TcJ++)
			{
				if (otherThreeMatrix != null)
				{
					if (otherThreeMatrix instanceof ThreeMatrix)
						temp.push(otherThreeMatrix.at(TcI,TcJ));
					else if (otherThreeMatrix instanceof Array)
					{
						if (otherThreeMatrix.length == 9)
						{
							temp.push(otherThreeMatrix[TcI * 3 + TcJ]);
						}
						else if (otherThreeMatrix.length == 3 && otherThreeMatrix[0].length == 3 && otherThreeMatrix[1].length == 3 && otherThreeMatrix[2].length == 3)
						{
							temp.push(otherThreeMatrix[TcI][TcJ]);
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
		if (row >= 0 && row < 3 && column >= 0 && column < 3 )
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
		if (row >= 0 && row < 3 && column >= 0 && column < 3 )
			this._data[row][column] = value;
	}

/** 
Retrieve a row vector for a given row
@param row the zero indexed row from which to retrieve
@returns If row is a valid index, then a ThreeVector containing the row data, otherwise null
*/
	row(rowNum)
	{
		if (rowNum != null && rowNum >= 0 && rowNum < 3)
		{
			return new ThreeVector(this._data[rowNum][0],this._data[rowNum][1],this._data[rowNum][2]);
		}
		else
			return null;
	}
/** 
Retrieve a column vector for a given column
@param column the zero indexed column from which to retrieve
@returns If column is a valid index, then a ThreeVector containing the column data, otherwise null
*/
	column(columnNum)
	{
		if (columnNum != null && columnNum >= 0 && columnNum < 3)
		{
			return new ThreeVector(this._data[0][columnNum],this._data[1][columnNum],this._data[2][columnNum]);
		}
		else
			return null;
	}

/** 
Perform a matrix multiplication with a column vector
@param vector the ThreeVector by which the matrix is multiplied
@returns the value at the selected row and column, null otherwise
*/
	dotVector(vector)
	{
		if (vector != null && vector instanceof ThreeVector)
		{
			return new ThreeVector(this._data[0][0] * vector.x + this._data[0][1] * vector.y + this._data[0][2] * vector.z,
							this._data[1][0] * vector.x + this._data[1][1] * vector.y + this._data[1][2] * vector.z,
							this._data[2][0] * vector.x + this._data[2][1] * vector.y + this._data[2][2] * vector.z,
							);
		}
		else
			return null;
	}
/** 
Perform a scalar multiplication of a three matrix
@param matrix the ThreeMatrix by which the matrix is multiplied
@returns if matrix is a ThreeMatrix, then a new ThreeMatrix containing the result of the multiplication, otherwise null
*/
	scale(scalar)
	{
		var ret = new ThreeMatrix();

		var TcI,TcJ;
		for (TcI = 0; TcI < 3; TcI++)
		{
			for (TcJ = 0; TcJ < 3; TcJ++)
			{
				ret._data[TcI][TcJ] = this._data[TcI][TcJ] * scalar;
			}
		}
		return ret;
	}
/** 
Perform a matrix multiplication with a ThreeMatrix
@param matrix the ThreeMatrix by which the matrix is multiplied
@returns if matrix is a ThreeMatrix, then a new ThreeMatrix containing the result of the multiplication, otherwise null
*/
	multiply(matrix)
	{
		if (matrix != null && matrix instanceof ThreeMatrix)
		{
			var ret = new ThreeMatrix();

			var TcI,TcJ;
			for (TcI = 0; TcI < 3; TcI++)
			{
				for (TcJ = 0; TcJ < 3; TcJ++)
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
Perform a matrix addition with a ThreeMatrix
@param matrix the ThreeMatrix which the matrix is added
@returns if matrix is a ThreeMatrix, then a new ThreeMatrix containing the result of the addition, otherwise null
*/
	add(matrix)
	{
		if (matrix != null && matrix instanceof ThreeMatrix)
		{
			var ret = new ThreeMatrix();

			var TcI,TcJ;
			for (TcI = 0; TcI < 3; TcI++)
			{
				for (TcJ = 0; TcJ < 3; TcJ++)
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
Perform a matrix subtraction with a ThreeMatrix
@param matrix the ThreeMatrix which is to be subtracted from this matrix
@returns if matrix is a ThreeMatrix, then a new ThreeMatrix containing the result of the subtraction, otherwise null
*/
	subtract(matrix)
	{
		if (matrix != null && matrix instanceof ThreeMatrix)
		{
			var ret = new ThreeMatrix();

			var TcI,TcJ;
			for (TcI = 0; TcI < 3; TcI++)
			{
				for (TcJ = 0; TcJ < 3; TcJ++)
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
@returns A new ThreeMatrix containing the result of the transposition
*/
	transpose()
	{
		var ret = new ThreeMatrix();
		var TcI,TcJ;
		for (TcI = 0; TcI < 3; TcI++)
		{
			for (TcJ = 0; TcJ < 3; TcJ++)
			{
				ret._data[TcI][TcJ] = this._data[TcJ][TcI];
			}
		}
		return ret;
	}
/** 
Get the additive inverse of a matrix
@returns A new ThreeMatrix containing the result of the negation
*/
	negate()
	{
		var ret = new ThreeMatrix();
		var TcI,TcJ;
		for (TcI = 0; TcI < 3; TcI++)
		{
			for (TcJ = 0; TcJ < 3; TcJ++)
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
		return this._data[0][0] * (this._data[1][1] * this._data[2][2] - this._data[1][2] * this._data[2][1]) +
				this._data[0][1] * (this._data[1][2] * this._data[2][0] - this._data[1][0] * this._data[2][2]) +
				this._data[0][2] * (this._data[1][0] * this._data[2][1] - this._data[1][1] * this._data[2][0]);
	}
	
/**
Get the trace of the matrix
@returns The trace of the matrix
*/
	trace()
	{
		return this._data[0][0] + this._data[1][1] + this._data[2][2];
	}
/**
Get the inverse of the matrix
@returns A new ThreeMatrix containing the multiplicitave inverse
*/
	invert()
	{
		var ret = null;
		var det = this.determinant();
		if (det != 0.0)
		{
			var invdet = 1.0 / det;
			ret = new ThreeMatrix();
			ret._data[0][0] = invdet * (this._data[1][1] * this._data[2][2] - this._data[1][2] * this._data[2][1]);
			ret._data[1][0] = invdet * (this._data[1][2] * this._data[2][0] - this._data[1][0] * this._data[2][2]);
			ret._data[2][0] = invdet * (this._data[1][0] * this._data[2][1] - this._data[1][1] * this._data[2][0]);
			ret._data[0][1] = invdet * (this._data[0][2] * this._data[2][1] - this._data[0][1] * this._data[2][2]);
			ret._data[1][1] = invdet * (this._data[0][0] * this._data[2][2] - this._data[0][2] * this._data[2][0]);
			ret._data[2][1] = invdet * (this._data[0][1] * this._data[2][0] - this._data[0][0] * this._data[2][1]);
			ret._data[0][2] = invdet * (this._data[0][1] * this._data[1][2] - this._data[0][2] * this._data[1][1]);
			ret._data[1][2] = invdet * (this._data[0][2] * this._data[1][0] - this._data[0][0] * this._data[1][2]);
			ret._data[2][2] = invdet * (this._data[0][0] * this._data[1][1] - this._data[0][1] * this._data[1][0]);
		}
		else
			console.log("ThreeMatrix error: Inverting a zero matrix");
		return ret;
	}
/** 
Load the zero matrix
@returns none
*/
	loadZero()
	{
		var TcI,TcJ;
		for (TcI = 0; TcI < 3; TcI++)
		{
			for (TcJ = 0; TcJ < 3; TcJ++)
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
		for (TcI = 0; TcI < 3; TcI++)
		{
			for (TcJ = 0; TcJ < 3; TcJ++)
			{
				if (TcI == TcJ)
					this._data[TcI][TcJ] = 1.0;
				else
					this._data[TcI][TcJ] = 0;
			}
		}
	}
}
