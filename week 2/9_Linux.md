# README - Day 9 Linux Commands

## Overview
A concise guide on using `grep` and `awk` for log analysis and setting up Ollama in VS Code.

---

## Log Analysis with `grep`

### Extract Date and Time for Database Errors
```bash
grep "Database connection lost" logfile.txt 
```
- Extracts timestamps from logs containing "Database connection lost."

### Extract ERROR Logs
```bash
grep "ERROR" logfile.txt 
```
- Extracts timestamps from ERROR log entries.

![Linux Commands](../images/Screenshot%20from%202025-02-20%2022-22-38.png)
---

## System Monitoring with `awk`

### Extract High CPU and Memory Usage Logs
```bash
awk -F'[:,%]+' '$3 > 70 && $6 > 80' logfile.txt
```
- Filters logs where CPU usage > 70% and Memory usage > 80%.


---

## Setting Up Ollama in VS Code

### Install and Run Ollama
```bash
curl -fsSL https://ollama.com/install.sh | sh
ollama serve
```
- Installs and starts the Ollama server.

### Test Ollama in VS Code
```bash
ollama run mistral
```
- Runs a local AI model.

### Connect Ollama with Python
```python
import requests
requests.post("http://localhost:11434/api/generate", json={"model": "mistral", "prompt": "Hello"})
```
- Calls Ollama API using Python.

---

## Notes
- Use `grep -oP` for extracting patterns efficiently.
- Combine `grep` and `awk` for advanced filtering.
- Ollama enables running local AI models seamlessly in VS Code.

---

End of Document.
