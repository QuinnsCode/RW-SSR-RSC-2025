// instances: '1' (changed from 'max'):
// !!! 'max' would create multiple processes based on your CPU cores
// !!! For RSC (React Server Components), we want just one instance because server components maintain state and multiple instances might conflict
// !!! Single instance ensures consistent server-side rendering

// exec_mode: 'fork' (changed from 'cluster'):
//~~~ 'cluster' mode spreads load across multiple processes
//~~~'fork' mode runs in a single process
//~~~ RSC and SSR typically work better in fork mode because they need to maintain consistent state and share resources
//~~~ Fork mode provides better consistency for streaming responses
//Here is the old setup
// module.exports = {
//   apps: [
//     {
//       name: 'serve',
//       cwd: 'current',
//       script: 'node_modules/.bin/rw',
//       args: 'serve',
//       instances: 'max',
//       exec_mode: 'cluster',
//       wait_ready: true,
//       listen_timeout: 10000,
//     },
//   ],
// }

module.exports = {
  apps: [
    {
      name: 'serve',
      cwd: 'current',
      script: 'node_modules/.bin/rw',
      args: 'serve',
      instances: '1',
      exec_mode: 'fork',
      wait_ready: true,
      listen_timeout: 10000,
      kill_timeout: 5000, // Add time before forcing kill
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
