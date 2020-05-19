var iFailuresTwoMatrix = new TestCount();


var mA = new TwoMatrix([1,0,0,0]);
var mB = new TwoMatrix([[0,1],[0,0]]);
var mC = new TwoMatrix([0,0,1,0]);
var mD = new TwoMatrix([0,0,0,1]);

var mSet = [mA,mB,mC,mD];
var rank = Math.floor(Math.sqrt(mSet.length));

var mRand = new TwoMatrix([0.18893418,0.510986168,0.282937897,0.972385316]);

var mXY = new TwoMatrix([1,0,0,1]);
var mYX = new TwoMatrix([0,1,1,0]);

var mSetI = [mXY,mYX];

var mvX = new TwoVector(1,0);
var mvY = new TwoVector(0,1);
var mvSet = [mvX,mvY];

var mNN = new TwoMatrix([1,2,3,4]);
var mIdent = new TwoMatrix();
mIdent.loadIdentity();

var mZero = new TwoMatrix();
mZero.loadZero();



for (i = 0; i < mSet.length; i++)
{
	var letter = nToLetter(i);		
		
	for (j = 0; j < mSet.length; j++)
	{
		var row = Math.floor(j / rank);
		var col = j % rank;
		if (i == j)
			iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,letter + "(" + row + "," + col + ")",mSet[i].at(row,col),1.0));
		else
			iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,letter + "(" + row + "," + col + ")",mSet[i].at(row,col),0.0));
	}
}

for (j = 0; j < mSet.length; j++)
{
	var row = Math.floor(j / rank);
	var col = j % rank;
	if (row == col)
		iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,"I(" + row + "," + col + ")",mIdent.at(row,col),1.0));
	else
		iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,"I(" + row + "," + col + ")",mIdent.at(row,col),0.0));
}

for (j = 0; j < mSetI.length; j++)
{
	var row = Math.floor(j / rank);
	var col = j % rank;
	iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,"0(" + row + "," + col + ")",mZero.at(row,col),0.0));
}

for (j = 0; j < mSetI.length; j++)
{
	var row = Math.floor(j / rank);
	var col = j % rank;
	iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,"N(" + row + "," + col + ")",mNN.at(row,col),j + 1));
}

for (j = 0; j < mSetI.length; j++)
{
	var row = Math.floor(j / rank);
	var col = j % rank;
	iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,"transpose N(" + row + "," + col + ")",mNN.transpose().at(row,col),mNN.at(col,row)));
}

for (j = 0; j < mSetI.length; j++)
{
	var row = Math.floor(j / rank);
	var col = j % rank;
	iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,"-N(" + row + "," + col + ")",mNN.negate().at(row,col),-(j + 1)));
}

for (i = 0; i < mSetI.length; i++)
{
	var row = Math.floor(j / rank);
	var col = j % rank;
	iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,"2N(" + row + "," + col + ")",mNN.scale(2).at(row,col),2*(j + 1)));
}

for (i = 0; i < mSetI.length; i++)
{
	var letter = nToLetter(i);		
		
	for (j = 0; j < mSetI.length; j++)
	{
		var row = Math.floor(j / rank);
		var col = j % rank;
		if (i == j)
			iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + " + letter + ")(" + row + "," + col + ")",mNN.add(mSet[i]).at(row,col),2.0 + j));
		else
			iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,"(N + " + letter + ")(" + row + "," + col + ")",mNN.add(mSet[i]).at(row,col),1 + j));
	}
}


for (i = 0; i < mSetI.length; i++)
{
	var letter = nToLetter(i);		
		
	for (j = 0; j < mSetI.length; j++)
	{
		var row = Math.floor(j / rank);
		var col = j % rank;
		if (i == j)
			iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - " + letter + ")(" + row + "," + col + ")",mNN.subtract(mSet[i]).at(row,col),j));
		else
			iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,"(N - " + letter + ")(" + row + "," + col + ")",mNN.subtract(mSet[i]).at(row,col),1 + j));
	}
}



for (i = 0; i < mSetI.length; i++)
{
	var letter = nToLetter(i);		
		
	iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,"det(" + letter + ")",mSet[i].determinant(),0));
}

iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,"det(rand)",mRand.determinant(),0.039139470552492));
iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,"det(N)",mNN.determinant(),-2));
iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,"det(I)",mIdent.determinant(),1));
iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,"det(0)",mZero.determinant(),0));


for (i = 0; i < mSetI.length; i++)
{
	var letter = nToLetter(i);		
	if (i % 3 == Math.floor(i / rank))		
		iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,"tr(" + letter + ")",mSet[i].trace(),1));
	else
		iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,"tr(" + letter + ")",mSet[i].trace(),0));
}
iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,"tr(rand)",mRand.trace(),1.161319496));
iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,"tr(N)",mNN.trace(),5));
iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,"tr(I)",mIdent.trace(),2));
iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,"tr(0)",mZero.trace(),0));



for (j = 0; j < rank; j++)
{
	var letter;
	if (j == 0)
		letter = "vx";
	else if (j == 1)
		letter = "vy";
		
	iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,"N." + letter + ".x",mNN.dotVector(mvSet[j]).x,mNN.at(0,j)));
	iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,"N." + letter + ".y",mNN.dotVector(mvSet[j]).y,mNN.at(1,j)));
}


for (i = 0; i < mSetI.length; i++)
{
	var letter = nToLetter(i);		
		
	var rowi = Math.floor(i / rank);
	var coli = i % rank;
		
	for (j = 0; j < mSetI.length; j++)
	{
		var row = Math.floor(j / rank);
		var col = j % rank;
		if (Math.floor(coli) == Math.floor(col))
		{
			iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,"(N * " + letter + ")(" + row + "," + col + ")", mNN.multiply(mSet[i]).at(row,col),mNN.at(row,rowi)));
		}
		else
		{
			iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,"(N * " + letter + ")(" + row + "," + col + ")", mNN.multiply(mSet[i]).at(row,col),0));
		}
	}
}

for (i = 0; i < mSetI.length; i++)
{
	for (j = 0; j < rank; j++)
	{
		for (k =0; k < rank; k++)
		{
			iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,"(" + i + ")^(-1)(" + j + "," + k + ")", mSetI[i].invert().at(j,k),mSetI[i].transpose().at(j,k)));
		}
	}
}	

	



iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,"(rand)^(-1)(0,0)",mRand.invert().at(0,0),24.8441101086403));
iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,"(rand)^(-1)(0,1)",mRand.invert().at(0,1),-13.0555207003806));

iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,"(rand)^(-1)(1,0)",mRand.invert().at(1,0),-7.22896587526742));
iFailuresTwoMatrix.addEq(testValueAndReport(bSilent_Pass,"(rand)^(-1)(1,1)",mRand.invert().at(1,1),4.82720326394322));


iFailuresTwoMatrix.report("Two Matrix");

