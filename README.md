# Wi-Fi Planner - Floor Simulaition Multi-Vendor RSSI Calculator

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
<img width="2256" height="2260" alt="image" src="https://github.com/user-attachments/assets/ee5a4f96-6a9e-4cae-bc66-d3516aaf4d3d" />

---

## 🔹 Algorithms
| Concept               | Name                                               |
| --------------------- | -------------------------------------------------- |
| Distance-loss formula | **Log-Distance Path Loss (LDPL) – simplified**     |
| RSSI estimation       | **Free-Space Path Loss approximation**             |
| Multi-AP selection    | **Strongest Signal (Max RSSI)**                    |
| Device suggestion     | **Heuristic matching (TX & Capacity ± tolerance)** |

## What Makes This Better vs Others?

| Feature                          | This Planner                                           | UniFi Planner          | Other Heatmaps (Ekahau / Tamo / NetSpot) |
| -------------------------------- | ------------------------------------------------------ | ---------------------- | ---------------------------------------- |
| Offline / no login               | ✅                                                     | ❌ cloud login needed   | ❌ usually license required               |
| Brand support                    | ✅ Multi-brand                                          | ❌ UniFi only           | ✅ multi                                  |
| Add your real AP models          | ✅ easy JSON                                            | ❌ closed               | ❌ locked DB                              |
| Works in browser                 | ✅                                                      | ✅                      | ❌ desktop apps                           |
| Custom wall drawing              | ✅ basic now                                            | ✅                      | ✅                                        |
| Custom RSSI logic                | ✅ editable                                             | ❌ closed               | ❌ closed                                 |
| Cost                             | **FREE**                                               | Free but vendor-locked | $$$$ Very expensive                      |
| Auto AP recommendation           | ✅                                                      | ❌                      | ❌                                        |
| Local Iraqi/ISP AP models        | 🟢 we can add Mikrotik, Ruijie, EnGenius, Mercury, etc | ❌                      | ❌                                        |
| Add your rules (users, TX, RSSI) | ✅                                                      | ❌                      | ❌                                        |

---

## 🔹 Installation

open https://ahmad-qadir.github.io/Wi-Fi-Planner/

```bash
git clone https://github.com/Ahmad-Qadir/Wi-Fi-Planner.git

## Reference

- Author website: [ahmad-qadir.dev](https://ahmad-qadir.dev/)
