# Safora.se – QA Automation Tests (Playwright)

**Author:** Dewmi Dilsara | QA Engineering Intern Candidate
**Target Site:** https://safora.se/en/
**Framework:** Playwright (JavaScript / Node.js)
**Assignment Part:** Part 2 – Basic UI Automation

---

## What This Script Covers

This automation suite covers the **Contact Us form** on the Safora website.

| Suite           | Test Cases                      |
| --------------- | ------------------------------- |
| Contact Us Form | Successful form submission      |
| Form Validation | Empty form validation           |
| Form Validation | Invalid email format validation |

---

## Prerequisites

Make sure you have these installed before running:

* **Node.js** v18 or higher
* **npm** (comes with Node.js)

Check versions:

```bash
node --version
npm --version
```

---

## Setup Instructions

### Step 1 – Clone the Repository

```bash
git clone https://github.com/Dewmi-dilsara/Safora-QA-Automation.git
cd Safora-QA-Automation
```

### Step 2 – Install Dependencies

```bash
npm install
```

### Step 3 – Install Playwright Browsers

```bash
npx playwright install
```

---

## Running the Tests

### Run All Tests

```bash
npx playwright test
```

### Run with Browser Visible

```bash
npx playwright test --headed
```

### Run a Specific Test

```bash
npx playwright test --grep "Invalid Email Format Validation"
```

---

## Expected Result

```text
Running 3 tests

✓ Successful Contact Form Submission
✓ Empty Form Validation
✓ Invalid Email Format Validation

3 passed
```

---

## Project Structure

```text
Safora-QA-Automation/
├── tests/
│   └── contact-form.spec.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## Test Case Summary

| Test ID | Description                                        | Type     |
| ------- | -------------------------------------------------- | -------- |
| TC-01   | Successful Contact Form Submission                 | Positive |
| TC-02   | Submit Empty Form and Verify Validation Messages   | Negative |
| TC-03   | Submit Invalid Email and Verify Validation Message | Negative |

---

## Test Details

### TC-01: Successful Contact Form Submission

**Objective:**
Verify that a user can submit the Contact Us form using valid data.

**Expected Result:**
Form submission process completes successfully.

---

### TC-02: Empty Form Validation

**Objective:**
Verify validation messages appear when submitting an empty form.

**Expected Result:**

* Full name is required.
* Phone number is required.
* Message is required.

---

### TC-03: Invalid Email Format Validation

**Objective:**
Verify that an invalid email address is rejected.

**Expected Result:**

* Please enter a valid email address.

---

## Technologies Used

* Playwright
* JavaScript
* Node.js
* Git
* GitHub

---

## Submission Notes

This automation suite was developed as part of the QA Engineering Intern Assignment and demonstrates:

* Positive Testing
* Negative Testing
* Form Validation Testing
* Basic UI Automation using Playwright

---

**Execution Result:** 3/3 Test Cases Passed Successfully
