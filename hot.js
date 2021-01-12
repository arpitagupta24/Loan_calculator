////mt stands for margin at top
//display-5 is bootstrap file gonna give the page certian size and "pb" is padding at the bottom

//ass we have completed our bootstrap UI, now we are going to start to add our javascript(adding functions, eventlistener for client interaction)
document.getElementById('loan-form').addEventListener('submit', function(e)
{
    //hide result
    document.getElementById('results').style.display='none';
    //show loader
    document.getElementById('loading').style.display='block';
    setTimeout(calculateResults,1000);
    e.preventDefault();
});

function calculateResults()
{
    console.log('Calculate...');
    //UI vars

    const UIamount= document.getElementById('amount');
    const interest= document.getElementById('interest');
    const years= document.getElementById('years');
    const monthlyPayment= document.getElementById('monthly-payment');
    const totalPayment= document.getElementById('total-payment');
    const totalInterest= document.getElementById('total-interest');
    // now comes the maths part
    const principal= parseFloat(amount.value); //converting value into decimal number
    const calculatedInterst= parseFloat(interest.value)/ 100/ 12;
    const calculatePayments= parseFloat(years.value)*12;
    //compute monthly payments
    const x= Math.pow(1+calculatedInterst, calculatePayments);
    const monthly= (principal*x*calculatedInterst)/(x-1);

    if(isFinite(monthly))
    {
        monthlyPayment.value= monthly.toFixed(2);
        totalPayment.value= (monthly*calculatePayments).toFixed(2);
        totalInterest.value= ((monthly*calculatePayments) - principal).toFixed(2);
//show results
        document.getElementById('results').style.display='block';
        //hide loading
        document.getElementById('loading').style.display='none';
    }
    else
    {
       // console.log("Please cheack your information");
        showError('Please check your number');
    }
    //since this is a form submit so we want to avoid default results   
   // e.preventDefault();
}
//show an error when anything went wrong during the data input

function showError(error)
{        
    document.getElementById('results').style.display='none';
    document.getElementById('loading').style.display='none';
    //create a div
    const errorDiv = document.createElement('div');
    //get element
    const card= document.querySelector('.card');
    const heading= document.querySelector('.heading');
    //add class
    errorDiv.className= 'alert alert-danger';
    //create text node
    errorDiv.appendChild(document.createTextNode(error));

    //insert error before the heading
    card.insertBefore(errorDiv,heading);
    //clear error after 3 sec
    setTimeout(clearError, 3000);
}
//clear error
function clearError()
{
    document.querySelector('.alert').remove();
}