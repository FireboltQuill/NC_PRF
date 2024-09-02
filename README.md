# NurtureCloud Property Report Funnel - Cypress Automation

Automation testing of NurtureCloud's Property Report Funnel using Cypress

## Prerequisites:

- Node.js 18.x, 20.x, or 22.x (https://nodejs.org/en)
- Git (https://git-scm.com/)

## Getting Started:

1. Install dependencies:

```
npm install cypress
```

2. Start the Cypress app:

```
npx cypress open
```

## Funnel Flow:

### 1. Enter property address

### 2. Enter property details:
- No. bedrooms
- No. bathrooms
- Parking

### 3. Confirm user details: 
- First name
- Last name
- Email
- Mobile Phone Number

### 4. Questionnaire

Relationship with the property
- Owner Occupied: 

	- When are you thinking of selling?
		- Now
		- Within the next month
		- 2-6 months
		- 6+ months
		- Already on the market
		- Not sure
		- Just refinancing
- Owner Investor: 
	
	- When are you thinking of selling?
		- Now
		- Within the next month
		- 2-6 months
		- 6+ months
		- Already on the market
		- Not sure
		- Just refinancing
- Buyer
	- Are you looking to sell a property before purchase
		- Yes
		- No
- Tenant

### 5. Online property report generated and displayed and Property report sent to entered email address

## Automated Test Cases (34)

| No. | ID  | Property Address | Property Details	  | User Details  | Questionnaire						  |
| -- | --- | ---------------- | --------------------- | ------------- | ------------------------------------- |
| 01 | 1.1 | Valid address    | Valid details		  | Valid details | Owner Occupied, Now					  |
| 02 | 1.2 | Valid address    | Valid details		  | Valid details | Owner Occupied, Within the next month |
| 03 | 1.3 | Valid address    | Valid details		  | Valid details | Owner Occupied, 2-6 months			  |
| 04 | 1.4 | Valid address    | Valid details		  | Valid details | Owner Occupied, 6+ months			  |
| 05 | 1.5 | Valid address    | Valid details		  | Valid details | Owner Occupied, Already on the market |
| 06 | 1.6 | Valid address    | Valid details		  | Valid details | Owner Occupied, Not sure			  |
| 07 | 1.7 | Valid address    | Valid details		  | Valid details | Owner Occupied, Just refinancing	  |
| 08 | 2.1 | Valid address    | Valid details		  | Valid details | Owner investor, Now					  |
| 09 | 2.2 | Valid address    | Valid details		  | Valid details | Owner investor, Within the next month |
| 10 | 2.3 | Valid address    | Valid details		  | Valid details | Owner investor, 2-6 months 			  |
| 11 | 2.4 | Valid address    | Valid details		  | Valid details | Owner investor, 6+ months 			  |
| 12 | 2.5 | Valid address    | Valid details		  | Valid details | Owner investor, Already on the market |
| 13 | 2.6 | Valid address    | Valid details		  | Valid details | Owner investor, Not sure 			  |
| 14 | 2.7 | Valid address    | Valid details		  | Valid details | Owner investor, Just refinancing	  |
| 15 | 3.1 | Valid address    | Valid details		  | Valid details | Buyer, Yes							  |
| 16 | 3.2 | Valid address    | Valid details		  | Valid details | Buyer, No							  |
| 17 | 4.1 | Valid address    | Valid details		  | Valid details | Tenant								  |
| 18 | 5.1 | Valid address    | Skip property details | Valid details | Owner Occupied, Now					  |
| 19 | 5.2 | Valid address    | Skip property details | Valid details | Owner Occupied, Within the next month |
| 20 | 5.3 | Valid address    | Skip property details | Valid details | Owner Occupied, 2-6 months			  |
| 21 | 5.4 | Valid address    | Skip property details | Valid details | Owner Occupied, 6+ months			  |
| 22 | 5.5 | Valid address    | Skip property details | Valid details | Owner Occupied, Already on the market |
| 23 | 5.6 | Valid address    | Skip property details | Valid details | Owner Occupied, Not sure			  |
| 24 | 5.7 | Valid address    | Skip property details | Valid details | Owner Occupied, Just refinancing	  |
| 25 | 6.1 | Valid address    | Skip property details | Valid details | Owner investor, Now					  |
| 26 | 6.2 | Valid address    | Skip property details | Valid details | Owner investor, Within the next month |
| 27 | 6.3 | Valid address    | Skip property details | Valid details | Owner investor, 2-6 months			  |
| 28 | 6.4 | Valid address    | Skip property details | Valid details | Owner investor, 6+ months 			  |
| 29 | 6.5 | Valid address    | Skip property details | Valid details | Owner investor, Already on the market |
| 30 | 6.6 | Valid address    | Skip property details | Valid details | Owner investor, Not sure 			  |
| 31 | 6.7 | Valid address    | Skip property details | Valid details | Owner investor, Just refinancing 	  |
| 32 | 7.1 | Valid address    | Skip property details | Valid details | Buyer, Yes							  |
| 33 | 7.2 | Valid address    | Skip property details | Valid details | Buyer, No							  |
| 34 | 8.1 | Valid address    | Skip property details | Valid details | Tenant								  |

## Test Results
![image](https://github.com/user-attachments/assets/407b67e1-211c-4720-a3af-0efeeabe6575)<br>
![image](https://github.com/user-attachments/assets/52ba12b0-d96b-4a7f-b792-532303cd0770)

## Further Testing

- Validate report data accuracy according to official data source
- Entering invalid address
	- Wrong parts of the address e.g. number is wrong but street is correct
	- Overflowing the box
- Entering invalid property details (Form should have input validation)
	- Entering 0
	- Entering negative numbers
	- Entering large numbers
- Entering invalid user details (These shouldn't have any impact on the flow. Just wrong info when sending emails/sms message)
	- Wrong name
	- Wrong email address
	- Wrong phone number
- Using different browser/device combinations
- Other functions
	- Sign in
 	- Track property
