# Wi-Fi Planner - Numeric RSSI Calculator

[![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-purple?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

A **real-time Wi-Fi RSSI calculator** for network planning, allowing dynamic calculation of signal strength based on **AP power, frequency, distance, and wall/floor obstacles**. Built with **HTML, Bootstrap 5, and JavaScript**, this tool is lightweight and runs entirely in the browser.

---

## 🔹 Features

- **Dynamic RSSI Calculation** – Updates instantly when AP power, frequency, distance, or wall types change.
- **Multiple Wall/Floor Types** – Supports:
  - Concrete (15 dB)
  - Plastic (5 dB)
  - Glass (7 dB)
- **Summary View** – Shows:
  - Total number of walls/floors
  - Total wall/floor loss (dB)
  - RSSI value (color-coded):
    - **Green**: Good (> -65 dBm)
    - **Orange**: Medium (-75 to -65 dBm)
    - **Red**: Weak (≤ -75 dBm)
- **Bootstrap 5 UI** – Clean, responsive, and mobile-friendly.
- **Lightweight** – Fully client-side, no backend required.


---

## 🔹 Screenshots

<img width="1920" height="918" alt="image" src="https://github.com/user-attachments/assets/fd410c82-c994-4e62-b75a-65fdb13207a4" />

---

## 🔹 Installation

1. Clone the repository:

```bash
git clone https://github.com/Ahmad-Qadir/Wi-Fi-Planner.git
