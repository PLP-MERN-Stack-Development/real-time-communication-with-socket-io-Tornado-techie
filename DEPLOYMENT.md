# Deployment and Maintenance Documentation

## 🚀 Deployment Procedures

### Frontend Deployment (Vercel)
1. **Automatic Deployment**: Vercel automatically deploys on every push to the `main` branch
2. **Manual Deployment**: 
   ```bash
   # Build locally first
   cd client
   npm run build
   
   # Deploy via Vercel CLI (if installed)
   vercel --prod
   ```
3. **Environment Variables**: Configured in `vercel.json`
4. **Rollback**: Use Vercel dashboard to rollback to previous deployments

### Backend Deployment (Render)
1. **Automatic Deployment**: Render automatically deploys on every push to the `main` branch
2. **Manual Deployment**: Trigger redeploy from Render dashboard
3. **Environment Variables**: Set in Render dashboard:
   - `MONGODB_URI`
   - `JWT_SECRET` 
   - `CLIENT_URL`
   - `NODE_ENV=production`
4. **Rollback**: Use Render dashboard to rollback to previous deployments

## 🔄 Rollback Strategies

### Frontend Rollback
1. **Via Vercel Dashboard**:
   - Go to project dashboard
   - Navigate to "Deployments" tab
   - Click "Promote to Production" on a previous deployment

2. **Via Git**:
   ```bash
   # Revert to previous commit
   git revert <commit-hash>
   git push origin main
   ```

### Backend Rollback
1. **Via Render Dashboard**:
   - Go to service dashboard
   - Navigate to "Deployments" tab  
   - Click "Redeploy" on a previous successful deployment

2. **Emergency Rollback**:
   ```bash
   # Revert to previous commit
   git revert <commit-hash>
   git push origin main
   ```

## 📊 Monitoring Setup

### Health Checks
- **Backend Health**: `https://socket-io-chat-app-mhoi.onrender.com/health`
- **Response Format**: `{"status": "OK", "timestamp": "ISO_DATE"}`
- **Expected Status**: 200 OK

### Uptime Monitoring (To Implement)
Recommended services:
1. **UptimeRobot** (Free tier available)
2. **Pingdom** 
3. **StatusPage.io**

**Setup Steps**:
1. Create account with monitoring service
2. Add endpoints:
   - Frontend: `https://realtime-socketio-chatapp-z6rv.vercel.app`
   - Backend: `https://socket-io-chat-app-mhoi.onrender.com/health`
3. Configure alerts (email/SMS)
4. Set check intervals (5-15 minutes)

### Error Tracking (To Implement)
Recommended: **Sentry**

**Setup Steps**:
1. Create Sentry project
2. Install Sentry SDKs:
   ```bash
   # Backend
   cd server && npm install @sentry/node
   
   # Frontend  
   cd client && npm install @sentry/react
   ```
3. Configure Sentry in applications
4. Set up error alerts

### Performance Monitoring
**Backend Metrics to Track**:
- Response time
- Memory usage
- CPU utilization  
- Database query performance
- Socket.io connection count

**Frontend Metrics to Track**:
- Page load time
- Bundle size
- Core Web Vitals
- User interactions

## 💾 Backup Procedures

### Database Backups (MongoDB Atlas)
**Automatic Backups**:
- MongoDB Atlas provides automatic backups
- Retention: 7 days (free tier)
- Point-in-time recovery available

**Manual Backup**:
```bash
# Using mongodump (requires MongoDB tools)
# SECURITY WARNING: Never commit actual credentials to version control
# Use environment variables or secure credential management

# Template (replace placeholders with actual values):
mongodump --uri="mongodb+srv://[USERNAME]:[PASSWORD]@[CLUSTER].mongodb.net/[DATABASE]" --out ./backup/$(date +%Y%m%d)

# Example usage (DO NOT commit actual values):
# mongodump --uri="$MONGODB_URI" --out ./backup/$(date +%Y%m%d)
```

**Backup Schedule Recommendations**:
- **Development**: Weekly manual backups
- **Production**: Daily automatic (Atlas handles this)
- **Critical Updates**: Manual backup before deployment

### Code Backups
- **Primary**: GitHub repository (main/develop branches)
- **Secondary**: Local development machines
- **Deployment Artifacts**: Vercel/Render maintain deployment history

## 🔧 Maintenance Tasks

### Weekly Tasks
- [ ] Check application uptime and performance
- [ ] Review error logs and fix critical issues
- [ ] Monitor database size and performance
- [ ] Check security alerts from GitHub/npm

### Monthly Tasks  
- [ ] Update dependencies (`npm audit` and `npm outdated`)
- [ ] Review and update documentation
- [ ] Performance optimization review
- [ ] Security audit and patching
- [ ] Backup verification

### Quarterly Tasks
- [ ] Comprehensive security review
- [ ] Infrastructure cost optimization
- [ ] Disaster recovery testing
- [ ] Performance benchmarking
- [ ] Update deployment procedures

## 🚨 Incident Response

### Severity Levels
1. **Critical**: Application completely down
2. **High**: Major features broken, significant user impact
3. **Medium**: Minor features broken, limited user impact
4. **Low**: Cosmetic issues, no functional impact

### Response Procedures

#### Critical Issues
1. **Immediate Actions** (0-15 minutes):
   - Verify issue scope and impact
   - Check monitoring dashboards
   - Implement immediate rollback if possible
   
2. **Investigation** (15-60 minutes):
   - Check recent deployments
   - Review error logs
   - Identify root cause
   
3. **Resolution** (1-4 hours):
   - Implement fix
   - Deploy and verify
   - Update stakeholders

#### Contact Information
- **Primary Developer**: [Your contact info]
- **Hosting Support**: 
  - Render: support@render.com
  - Vercel: support@vercel.com
  - MongoDB Atlas: support portal

## 📋 Deployment Checklist

### Pre-Deployment
- [ ] Code review completed
- [ ] Tests passing locally
- [ ] Security audit completed
- [ ] Database backup created (if schema changes)
- [ ] Environment variables verified

### During Deployment  
- [ ] Monitor deployment progress
- [ ] Check health endpoints post-deployment
- [ ] Verify key functionality works
- [ ] Monitor error rates for 30 minutes

### Post-Deployment
- [ ] Confirm all features working
- [ ] Update documentation if needed
- [ ] Notify stakeholders of successful deployment
- [ ] Monitor application for 24 hours

## 🔐 Security Maintenance

### ⚠️ CRITICAL SECURITY REMINDERS
- **NEVER commit `.env` files** containing real credentials
- **Always use `.env.example`** with placeholder values for documentation
- **Rotate credentials immediately** if accidentally exposed
- **Use environment variables** in production (Render/Vercel dashboards)
- **Review commit history** for accidentally committed secrets

### Regular Security Tasks
- [ ] Keep dependencies updated
- [ ] Monitor security advisories
- [ ] Review access logs
- [ ] Rotate secrets periodically (JWT_SECRET, DB passwords)
- [ ] Audit user permissions

### Security Incident Response
1. **Immediate**: Isolate affected systems
2. **Assessment**: Determine scope of breach
3. **Containment**: Stop ongoing attack
4. **Recovery**: Restore systems from clean backups
5. **Lessons Learned**: Document and improve procedures

---

**Last Updated**: November 2025  
**Document Owner**: Salome Mundia  
**Review Schedule**: Quarterly