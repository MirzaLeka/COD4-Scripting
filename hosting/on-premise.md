Hosting a **Call of Duty 4 (CoD4)** server in Bosnia for a smooth **12v12** (24/7) online experience requires careful planning in terms of hardware, software, network, and environmental factors. Here's a detailed breakdown of what you'll need:

---

## **1. Hardware Requirements (PC Specs)**

CoD4 isn't overly demanding, but for smooth gameplay with 24 concurrent players and 24/7 uptime, you need:

### **Minimum Requirements**
- **Processor (CPU):** Quad-core processor (e.g., Intel Core i5 or AMD Ryzen 3)
- **Memory (RAM):** 8GB (16GB preferred for stability and multitasking)
- **Storage:** 
  - **Game Files:** 50GB SSD or HDD
  - **Log Files/Backups:** Additional storage space depending on retention policies
- **Operating System:** Windows Server 2016/2019/2022 or Linux (Ubuntu Server, CentOS, etc.)

### **Recommended Requirements**
- **CPU:** Intel Core i7 or AMD Ryzen 5/7 (higher single-core performance is better)
- **RAM:** 16GB or higher for future scalability.
- **Storage:** SSD for faster read/write speeds, especially when maps change or logs are written.
- **GPU:** Not required (dedicated servers don’t need graphical rendering).

---

## **2. Internet Connection**

A stable and fast internet connection is **critical** for low ping and smooth player experience.

- **Bandwidth Requirements:** 
  - CoD4 uses around **10-20 KB/s per player**, so for 24 players:
    - **Upload Speed:** 20 Mbps minimum (**50+ Mbps recommended** for headroom).
    - **Download Speed:** 10 Mbps minimum (rarely stressed as the server sends more than it receives).
- **Connection Type:** Fiber-optic is ideal (low latency and high reliability).
- **Ping:** Keep the ping to major ISPs under **30 ms**.

---

## **3. Network Configuration**

### **Public IP Address**
- You need a **static public IP address** for players to connect easily. Obtain this from your ISP.

### **Port Forwarding**
- CoD4 uses the following ports by default:
  - **TCP/UDP:** `28960`
  - Configure port forwarding in your router to direct incoming traffic to the server machine.

### **Firewall Settings**
- Allow traffic on port `28960` (or your custom port) in your system and router firewalls.

### **Proxy or VPN**
- Use a **proxy or VPN with low latency** only if you need to protect the server from potential DDoS attacks or maintain anonymity.

### **Network Router**
- Use a reliable router that can handle simultaneous connections without dropping packets (e.g., Mikrotik, Ubiquiti, or ASUS gaming routers).

---

## **4. Software Requirements**

### **Game Server Software**
- Download the **Call of Duty 4 dedicated server software** (available from your game files or online).
- Use **CoD4x** for better mod support, anti-cheat, and enhanced server features.

### **Server Mods**
- Install mods like **Promod** for a competitive environment or custom mods/maps for fun gameplay.

### **Operating System**
- **Windows**: Easy to set up with CoD4’s GUI tools.
- **Linux**: Efficient for performance, but you’ll need some experience with command-line tools.

### **Server Management Tools**
- Use tools like **ModernRcon**, **B3 (Big Brother Bot)**, or **COD4x Server Manager** for:
  - Monitoring server health.
  - Administering players (kicks, bans, etc.).
  - Automated logging and backups.

---

## **5. Environmental and Power Considerations**

- **Uninterrupted Power Supply (UPS):** Prevent downtime during power outages.
- **Cooling:** Servers running 24/7 can overheat. Ensure proper airflow and cooling (e.g., case fans or an air-conditioned room).
- **Backup Storage:** Use external drives or cloud storage for regular backups of server data and player logs.

---

## **6. Hosting Costs**

If you host from home, you’ll incur:
- **Electricity Costs:** Expect around 150–300W power usage for the server.
- **Internet Costs:** A robust fiber-optic plan with a static IP.
- **Hardware Costs:** One-time PC build investment (~$700–$1000 USD).

Alternatively, consider **renting a VPS or dedicated server** from a hosting provider in Bosnia or a nearby country (e.g., Germany or Austria for low ping). Providers like **Hetzner** or **OVH** offer affordable options.

---

## **7. Additional Setup for Smooth Experience**

### **Player Monitoring**
- Install anti-cheat plugins (e.g., **CoD4x anti-cheat**) to keep the gameplay fair.
- Configure admin permissions for moderators to manage players.

### **Server Settings**
- Use settings optimized for 12v12 gameplay:
  - **Tickrate:** 30-50 (higher rates need more CPU).
  - **Map Rotation:** Select maps that don’t over-stress server resources.
  - **Ping Limit:** Set a reasonable ping cap (e.g., 150 ms) to avoid laggy players.

### **Testing**
- Run stress tests to check server stability under full load (24 players).
- Regularly monitor latency, CPU/RAM usage, and bandwidth utilization.

---

By setting up your server with these considerations, you’ll provide a stable, smooth, and enjoyable CoD4 experience for players in Bosnia!
