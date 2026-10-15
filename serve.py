import http.server
import socketserver
import sys

PORT = 8080

class NoCacheHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def run_server(port):
    try:
        with socketserver.TCPServer(("", port), NoCacheHTTPRequestHandler) as httpd:
            print(f"🚀 Avonsi Services Dev Server")
            print(f"🔗 Local: http://localhost:{port}")
            print(f"🛑 Press Ctrl+C to stop")
            print(f"💡 Caching is DISABLED")
            httpd.serve_forever()
    except OSError:
        print(f"⚠️  Port {port} is busy, trying {port + 1}...")
        run_server(port + 1)

if __name__ == "__main__":
    run_server(PORT)
